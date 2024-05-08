interface GameObject {
  type: string;
  id: string;
  name: {
    type: string;
    value: string;
  };
  yearPublished: {
    value: string;
  };
}

interface GameDetailObject {
  type: string;
  id: string;
  thumbnail: string;
  image: string;
  name: string;
  description: string;
  yearPublished: string;
  minPlayers: string;
  maxPlayers: string;
  playingTime: string;
  minPlayTime: string;
  maxPlayTime: string;
  minimumAge: string;
}

export interface GameObjects {
  item: GameObject[];
}

export interface ParsedGame {
  id: string | null;
  name: string | null;
  yearPublished: string | null;
  type: string | null;
}

export const parseSearchResults = (items: GameObject[]): ParsedGame[] => {
  return items.map(
    (item): ParsedGame => ({
      id: item.id,
      name: item.name.value,
      yearPublished: item.yearPublished ? item.yearPublished.value : null,
      type: item.type,
    })
  );
};

// export const parseGameDetails = (gameDetails: GameDetailObject) => {};
