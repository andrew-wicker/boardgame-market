export interface GameObject {
  type: string;
  id: string;
  name: {
    type: string;
    value: string;
  };
  yearpublished: {
    value: string;
  };
}

export interface GameDetailObject {
  type: string;
  bgg_id: string;
  thumbnail_url: string;
  image_url: string;
  title: string;
  description: string;
  year_published: string;
  min_players: string;
  max_players: string;
  playing_time: string;
  min_play_time: string;
  max_play_time: string;
  min_age: string;
}

export interface GameObjects {
  item: GameObject[];
}

export interface ParsedGame {
  id: string | null;
  name: string | null;
  yearpublished: string | null;
  type: string | null;
}

export const parseSearchResults = (items: GameObject[]): ParsedGame[] => {
  // console.log("items: ", items);
  if (!Array.isArray(items)) {
    items = [items];
  }
  return items.map(
    (item): ParsedGame => ({
      id: item.id,
      name: item.name.value,
      yearpublished: item.yearpublished ? item.yearpublished.value : null,
      type: item.type,
    })
  );
};

// export const parseGameDetails = (gameDetails: GameDetailObject) => {};
