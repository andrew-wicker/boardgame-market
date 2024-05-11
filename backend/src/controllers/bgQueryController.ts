import express, { Request, Response, NextFunction } from 'express';
import {
  parseSearchResults,
  GameObjects,
  GameObject,
  GameDetailObject,
} from '../lib/xmlParsingHelpers';

import { parser } from '../lib/bgXmlParser';

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
  defaultValue: string = ''
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
          res.status(500).send('Failed to parse XML');
          return;
        }

        if (!result.items || !result.items.item) {
          res.status(404).send('No games found');
          return;
        }

        const games = parseSearchResults(result.items.item);
        res.locals.games = games;
        next();
      });
    } catch (error) {
      console.error('Error fetching data: ', error);
      res.status(500).send('Error fetching data');
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
          res.status(500).send('Failed to parse XML');
        } else if (result && result.items && result.items.item) {
          const gameDetails = {
            type: result.items.item.type,
            bgg_id: result.items.item.id,
            thumbnail_url: result.items.item.thumbnail,
            image_url: result.items.item.image,
            title: getFirstIndexOrDefault(result.items.item.name),
            description: result.items.item.description,
            year_published: result.items.item.yearpublished.value,
            min_players: result.items.item.minplayers.value,
            max_players: result.items.item.maxplayers.value,
            playing_time: result.items.item.playingtime.value,
            min_play_time: result.items.item.minplaytime.value,
            max_play_time: result.items.item.maxplaytime.value,
            min_age: result.items.item.minage.value,
          };
          res.locals = { gameDetails };
          next();
        } else {
          res.status(404).send('Game not found');
        }
      });
    } catch (error) {
      console.error('Error fetching data: ', error);
      res.status(500).send('Error fetching data');
    }
  },
};

export default bgQuery;
