import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
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

interface CollectionProps {
  view: string;
}

export default function Collection({ view }: CollectionProps) {
  const [gameCollection, setGameCollection] = useState<GameFromCollection[]>(
    [],
  );
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      console.log('User not logged in');
      return;
    }

    const userId = localStorage.getItem('userId');

    const fetchGameCollection = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/data/view/${userId}`,
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
        console.log('gameCollection: ', gameCollection);
      } catch (error) {
        console.error('Failed to fetch game details: ', error);
      }
    };

    fetchGameCollection();
  }, [view, user]);

  return (
    <>
      <div className="flex flex-wrap">
        {gameCollection.map((game) => {
          return (
            <CollectionCard
              key={game.game_id}
              {...game}
            />
          );
        })}
      </div>
    </>
  );
}
