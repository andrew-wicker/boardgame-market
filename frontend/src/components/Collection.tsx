import { useState, useEffect } from 'react';
import { useAuth } from './AuthProvider';
import { useLocation } from 'react-router';
import CollectionCard from './CollectionCard';

export interface GameFromCollection {
  artist_id: null;
  bgg_id: number;
  description: string;
  designer_id: null;
  game_id: number;
  image_url: string;
  max_play_time: number;
  max_players: number;
  min_age: number;
  min_play_time: number;
  min_players: number;
  playing_time: number;
  publisher_id: null;
  thumbnail_url: string;
  title: string;
  type: string;
  year_published: number;
}

export default function Collection() {
  const [gameCollection, setGameCollection] = useState<GameFromCollection[]>(
    [],
  );
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      console.log('User not logged in');
      return;
    }

    fetchGameCollection();
  }, [user, location.pathname]);

  const fetchGameCollection = async () => {
    if (!user) return;
    try {
      const response = await fetch(
        `http://localhost:3000/data/view/${user.userId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      const data = await response.json();
      console.log('data in fetchGameUseEffect: ', data);
      setGameCollection(data);
    } catch (error) {
      console.error('Failed to fetch game details: ', error);
    }
  };

  const removeGame = async (game_id: number) => {
    if (!user) return;
    try {
      console.log('game_id', game_id);
      const response = await fetch(
        `http://localhost:3000/data/collection/${game_id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      if (response.ok) {
        setGameCollection(
          gameCollection.filter((game) => game.game_id !== game_id),
        );
      }
    } catch (error) {
      console.error('Failed to remove game: ', error);
    }
  };

  return (
    <>
      <div className="flex flex-wrap">
        {gameCollection.map((game) => {
          return (
            <CollectionCard
              key={game.game_id}
              {...game}
              removeGame={removeGame}
            />
          );
        })}
      </div>
    </>
  );
}
