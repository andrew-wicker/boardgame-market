import { useState } from 'react';
import Modal from 'react-modal';
import { GameFromCollection } from './Collection';
import { Clock3, Users, Baby } from 'lucide-react';

Modal.setAppElement('#root');

interface CollectionCardProps extends GameFromCollection {
  removeGame: (gameId: number) => void;
}

export default function CollectionCard({
  description,
  image_url,
  max_players,
  min_age,
  min_players,
  playing_time,
  title,
}: CollectionCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const formattedDescription = description
    .replace(/&#10;/g, '\n')
    .replace(/&quot;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&rsquo;/g, "'")
    .replace(/&amp;/g, '&');

  return (
    <>
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
        contentLabel="User Authentication"
        className="fixed inset-0 h-auto w-1/2 rounded-2xl bg-white p-8 shadow-lg"
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
          className="float-right text-3xl font-bold text-night-900"
        >
          X
        </button>
        <div className="grid grid-flow-col grid-cols-3 gap-4">
          <div className="col-span-1">
            <img
              src={image_url}
              className="mb-4 rounded-md border-2 border-night-800 shadow-lg"
            />
            <div className="ml-4 flex flex-col justify-evenly gap-2 text-xl font-bold">
              <div className="flex items-center gap-2">
                <Users />
                <p className="">
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
          </div>
          <div className="col-span-2 line-clamp-6 overflow-scroll whitespace-pre-line px-4">
            <p className="text-s text-left">{formattedDescription}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
