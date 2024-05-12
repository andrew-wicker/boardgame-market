import express, { Request, Response, NextFunction } from 'express';
import {
  parseSearchResults,
  GameObjects,
  GameObject,
  GameDetailObject,
} from '../lib/xmlParsingHelpers';
import { ErrInfo } from '../@types';

import { parser } from '../lib/bgXmlParser';

// * Helper function to create bgQueryController error objects
const createErr = (errInfo: ErrInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `bgQueryController.${method} ${type}: ERROR: ${
      typeof err === 'object' ? JSON.stringify(err) : err
    }`,
    message: {
      err: `Error occured in bgQueryController.${method}. Check server logs for more details.`,
    },
  };
};

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

      parser.parseString(
        text,
        (err: unknown, result: { items: GameObjects }) => {
          if (err) {
            const error = err as Error;
            console.error(error.message);
            return next(
              createErr({
                method: 'parseString in bgQuery.gameSearch',
                type: 'XML Parsing Error',
                err: error.message,
              })
            );
          }

          if (!result.items || !result.items.item) {
            return next(
              createErr({
                method: 'parseString in bgQuery.gameSearch',
                type: 'No Games Found',
                err: 'No games found in the XML response',
              })
            );
          }

          const games = parseSearchResults(result.items.item);
          res.locals.games = games;
          return next();
        }
      );
    } catch (err: unknown) {
      const error = err as Error;
      console.error('Error fetching data: ', error.message);
      res.status(500).send('Error fetching data');
      return next(
        createErr({
          method: 'gameSearch in bgQuery',
          type: 'XML to JSON Parse Error',
          err: 'Game lookup failed',
        })
      );
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
          const error = err as Error;
          console.error(error.message);
          return next(
            createErr({
              method: 'parseString in bgQuery.gameDetailSearch',
              type: 'XML Parsing Error',
              err: error.message,
            })
          );
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
          return next();
        } else {
          return next(
            createErr({
              method: 'parseString in bgQuery.gameSearch',
              type: 'No Games Found',
              err: 'No games found in the XML response',
            })
          );
        }
      });
    } catch (err) {
      const error = err as Error;
      console.error('Error fetching data: ', error.message);
      res.status(500).send('Error fetching data');
      return next(
        createErr({
          method: 'gameDetailSearch in bgQuery',
          type: 'Game Detail Search Failed',
          err: error.message,
        })
      );
    }
  },
};

export default bgQuery;
