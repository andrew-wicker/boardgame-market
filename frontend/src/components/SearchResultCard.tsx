import { useState, useEffect } from 'react';
import { SearchResult } from './SearchResultsDisplay';
import { GameDetailObject } from '../../../backend/src/lib/xmlParsingHelpers';
import { useAuth } from './AuthProvider';
import Toast from './Toast';
import Cookies from 'js-cookie';

interface SearchResultCardProps {
  searchResult: SearchResult;
}

export default function SearchResultCard({
  searchResult,
}: SearchResultCardProps) {
  const [gameDetails, setGameDetails] = useState<GameDetailObject | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const { user } = useAuth();

  const displayToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

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

  const handleAddToCollection = async () => {
    if (!user || !gameDetails) {
      displayToast('You must be logged in to add games to your collection.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/data/collection`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
        body: JSON.stringify({
          userId: user.userId,
          game: gameDetails,
        }),
      });

      if (response.ok) {
        // const data = await response.json();
        displayToast('Game added to collection!');
      } else {
        const errorData = await response.json();
        displayToast(errorData.message || 'Failed to add to collection');
      }
    } catch (error) {
      console.error('Failed to add game to collection: ', error);
      displayToast('Failed to add game to collection');
    }
  };

  if (!gameDetails) return null;
  if (gameDetails.type !== 'boardgame') return null;

  return (
    <div className=" my-8 flex h-56 w-1/5 basis-1/5 flex-col items-center">
      {showToast && (
        <Toast
          message={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}
      <div className="flex h-4/5 flex-col items-center justify-center rounded-xl px-2">
        <div
          className="relative min-h-48 w-48"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            className="group flex h-full w-full items-center justify-center transition-all ease-in-out"
            onClick={handleAddToCollection}
          >
            <img
              src={gameDetails.image_url}
              className="h-full w-full rounded-2xl object-cover object-top shadow-lg transition duration-300 ease-in-out group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="rounded bg-black bg-opacity-50 px-4 py-2 text-xl font-bold text-white">
                Click to Add
              </span>
            </div>
          </button>
        </div>

        <div className="mt-4 w-full rounded-b-xl border-night-700 px-2">
          <h3 className="text-pretty text-base font-bold">
            {gameDetails.title}
          </h3>
          <h5>{gameDetails.year_published}</h5>
        </div>
      </div>
    </div>
  );
}
