import { useState } from 'react';
import { useNavigate } from 'react-router';
import Modal from 'react-modal';
import { useAuth } from './AuthProvider';
import Cookies from 'js-cookie';
import { GameFromCollection } from './Collection';
import { Clock3, Users, Baby } from 'lucide-react';
import Toast from './Toast';

Modal.setAppElement('#root');

interface CollectionCardProps extends GameFromCollection {
  removeGame: (gameId: number) => void;
}

export default function CollectionCard({
  game_id,
  description,
  image_url,
  max_players,
  min_age,
  min_players,
  playing_time,
  title,
  removeGame,
}: CollectionCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();

  const gameId = game_id;

  const displayToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const formattedDescription = description
    .replace(/&#10;/g, '\n')
    .replace(/&quot;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&rsquo;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ');

  const handleRemoveGame = async (game_id: number) => {
    if (!user) {
      displayToast('You must be logged in to do that.');
      navigate('/main');
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/data/collection`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
        body: JSON.stringify({
          userId: user?.userId,
          game_id: game_id,
        }),
      });

      if (response.ok) {
        displayToast('Game removed from collection');
        removeGame(game_id);
      } else {
        const errorData = await response.json();
        displayToast(
          errorData.message || 'Failed to remove game from collection',
        );
      }
    } catch (error) {
      console.error('Failed to remove game from collection: ', error);
      displayToast('Failed to remove game from collection');
    }
  };

  return (
    <>
      {showToast && (
        <Toast
          message={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}
      <div className="flex max-w-56 flex-col justify-between overflow-hidden rounded shadow-lg">
        <img
          className="aspect-square w-full object-cover object-top"
          src={image_url}
          alt={title}
          onClick={() => setModalOpen(!modalOpen)}
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-pretty text-xl font-bold">{title}</div>
          <p className="text-base text-night-700"></p>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Game Details Modal"
        className="fixed inset-0 min-h-[70vh] w-3/5 rounded-2xl bg-white p-8 shadow-lg"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <button
          onClick={() => setModalOpen(false)}
          className="float-right mx-4 text-3xl font-bold text-night-900"
        >
          X
        </button>
        <div className="grid grid-flow-col grid-cols-3 gap-4">
          <div className="col-span-1 flex flex-col justify-between">
            <img
              src={image_url}
              className="mb-4 rounded-md border-2 border-night-800 shadow-lg"
            />
            <div className="ml-4 flex flex-col justify-evenly gap-2 text-xl font-bold">
              <div className="flex items-center gap-2">
                <Users />
                <p>
                  {min_players} - {max_players} Players
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Clock3 />
                <p className="font-bold">{playing_time} minutes</p>
              </div>
              <div className="flex items-center gap-2">
                <Baby />
                <p className="font-bold">Age: {min_age}+</p>
              </div>
            </div>
            <div className="ml-4 text-lg font-bold">
              <button onClick={() => handleRemoveGame(gameId)}>
                Remove Game from Collection
              </button>
            </div>
          </div>
          <p className="col-span-2 max-h-[65vh] overflow-auto whitespace-pre-wrap text-wrap break-normal px-4 font-serif text-lg">
            {formattedDescription}
          </p>
        </div>
      </Modal>
    </>
  );
}
