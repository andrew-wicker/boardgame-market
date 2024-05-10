import { useState, useEffect } from 'react';
import { SearchResult } from '../App';
import { GameDetailObject } from '../../../backend/lib/xmlParsingHelpers';

interface SearchResultCardProps {
  searchResult: SearchResult;
}

export default function SearchResultCard({
  searchResult,
}: SearchResultCardProps) {
  const [gameDetails, setGameDetails] = useState<GameDetailObject | null>(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/bg/bgquery/${searchResult.id}`,
        );
        const data = await response.json();
        setGameDetails(data);
        console.log('gameDetails: ', data);
      } catch (error) {
        console.error('Failed to fetch game details: ', error);
      }
    };

    fetchGameDetails();
  }, [searchResult.id]);

  if (!gameDetails) return null;
  if (gameDetails.type !== 'boardgame') return null;

  return (
    <div className="mx-8 mb-8 flex h-96 w-72 flex-col items-center justify-center rounded-xl border border-b-night-800 border-l-night-800 shadow-lg">
      <div className="relative flex h-56 w-56 items-center justify-center">
        <img
          src={gameDetails.image}
          className="max-h-full max-w-full rounded-2xl shadow-lg"
        />
      </div>
      <div className="mt-4 h-24 w-full rounded-b-xl border-night-700 px-2">
        <h3 className="truncate text-xl font-bold">{gameDetails.name}</h3>
        <h5>| {gameDetails.yearPublished} |</h5>
        <button className="mt-4 rounded bg-emerald-700 px-4 py-2 font-bold hover:border-emerald-200 hover:bg-emerald-400 hover:text-emerald-100">
          Add to Collection
        </button>
      </div>
    </div>
  );
}
