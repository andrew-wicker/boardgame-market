import express, { Request, Response, NextFunction } from "express";
import {
  parseSearchResults,
  GameObjects,
  GameObject,
  GameDetailObject,
} from "../lib/xmlParsingHelpers";

import { parser } from "../lib/bgXmlParser";

interface BoardGameQuery {
  gameSearch: (req: Request, res: Response, next: NextFunction) => void;
  gameDetailSearch: (req: Request, res: Response, next: NextFunction) => void;
}

interface NameObject {
  value: string;
}

type NameArrayOrObject = NameObject[] | NameObject;

const getFirstIndexOrDefault = (
  obj: NameArrayOrObject,
  defaultValue: string = ""
) => {
  if (Array.isArray(obj)) {
    return obj[0].value;
  } else if (obj && obj.value) {
    return obj.value;
  }
  return defaultValue;
};

const bgQuery: BoardGameQuery = {
  gameSearch: async function (req, res, next) {
    const { name } = req.query;
    try {
      const response = await fetch(
        `https://boardgamegeek.com/xmlapi2/search?query=${name}&type=boardgame`
      );

      const text = await response.text();

      parser.parseString(text, (err, result: { items: GameObjects }) => {
        if (err) {
          console.error(err);
          res.status(500).send("Failed to parse XML");
          return;
        }

        if (!result.items || !result.items.item) {
          res.status(404).send("No games found");
          return;
        }

        const games = parseSearchResults(result.items.item);
        res.locals.games = games;
        next();
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
      res.status(500).send("Error fetching data");
    }
  },
  gameDetailSearch: async function (req, res, next) {
    const { id } = req.params;
    try {
      const response = await fetch(
        `https://boardgamegeek.com/xmlapi2/thing?id=${id}`
      );
      const text = await response.text();

      parser.parseString(text, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Failed to parse XML");
        } else if (result && result.items && result.items.item) {
          const gameDetails = {
            type: result.items.item.type,
            id: result.items.item.id,
            thumbnail: result.items.item.thumbnail,
            image: result.items.item.image,
            name: getFirstIndexOrDefault(result.items.item.name),
            description: result.items.item.description,
            yearPublished: result.items.item.yearpublished.value,
            minPlayers: result.items.item.minplayers.value,
            maxPlayers: result.items.item.maxplayers.value,
            playingTime: result.items.item.playingtime.value,
            minPlayTime: result.items.item.minplaytime.value,
            maxPlayTime: result.items.item.maxplaytime.value,
            minimumAge: result.items.item.minage.value,
          };
          res.locals = { gameDetails };
          next();
        } else {
          res.status(404).send("Game not found");
        }
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
      res.status(500).send("Error fetching data");
    }
  },
};

export default bgQuery;
