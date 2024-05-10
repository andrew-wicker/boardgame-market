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
          `http://localhost:3000/bg/bgquery/${searchResult.id}`
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

  if (!gameDetails) return <div>Loading...</div>;

  // return (
  //   <div className="w-64 max-h-64 bg-white border border-sinopia rounded-lg shadow dark:bg-sinopia-300 dark:border-sinopia-700 flex flex-col justify-end">
  //     <div>
  //       <img
  //         src={gameDetails.image}
  //         className="aspect-auto "
  //       />
  //     </div>
  //     <div className="p-5">
  //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
  //         {searchResult.name}
  //       </h5>

  //       <p className="mb-3 font-normal text-night-900 dark:text-night-900">
  //         {searchResult.type} | {searchResult.yearpublished}
  //       </p>
  //       <div className="text-left text-white overflow-y-auto max-h-32">
  //         <p>{gameDetails.description}</p>
  //       </div>
  //       <a
  //         href="#"
  //         className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  //       >
  //         Add to Collection
  //       </a>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex flex-col mb-8 max-w-72 overflow-scroll">
      <div className="w-72 h-56 border-2 border-night-700 rounded-t-xl overflow-hidden shadow-md">
        <img src={gameDetails.image} />
      </div>
      <div className="h-16 rounded-b-xl border-2 border-night-700">
        <h3 className="text-xl font-bold truncate">{gameDetails.name}</h3>
        <h5>
          {gameDetails.yearPublished} | {gameDetails.type}
        </h5>
      </div>
    </div>
  );
}
