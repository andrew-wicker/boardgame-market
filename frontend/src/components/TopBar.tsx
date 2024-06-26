import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SquareUserRound } from 'lucide-react';
import Modal from 'react-modal';
import AuthForm from './AuthForm';
import { useAuth } from './AuthProvider';

Modal.setAppElement('#root');

interface TopBarProps {
  displayToast: (message: string) => void;
}

export default function TopBar({ displayToast }: TopBarProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (user) {
      logout();
      navigate('/');
      displayToast('You have been logged out.');
    } else {
      setModalOpen(true);
    }
  };

  const handleCollectionClick = () => {
    if (user) navigate('/collection');
    else {
      displayToast('Please log in view your collection.');
    }
  };

  return (
    <>
      <nav className="left-0 top-0 z-50 mb-2 flex max-h-24 w-full items-center justify-between bg-white p-2 font-sans">
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            className="h-auto w-20"
          />
          <div
            className="mt-2 text-4xl font-bold"
            onClick={() => navigate('/main')}
          >
            <button>K-LAX</button>
          </div>
        </div>

        <div className="mx-4 mt-4 flex items-center justify-center">
          <div>
            <button
              onClick={() => navigate('/search')}
              className="mr-8 text-xl hover:text-emerald-400"
            >
              Search
            </button>
          </div>
          <div>
            <button
              onClick={handleCollectionClick}
              className="mr-8 text-xl hover:text-emerald-400"
            >
              My Collection
            </button>
          </div>
          <button
            className="flex flex-col items-center justify-center text-center text-emerald-700 hover:text-emerald-200"
            onClick={handleAuthClick}
          >
            <SquareUserRound size={36} />
            {user ? 'Logout' : 'Login'}
          </button>
          <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            contentLabel="User Authentication"
            className="fixed inset-0 h-auto w-96 rounded-2xl bg-white p-5 shadow-lg "
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
            <AuthForm
              closeModal={() => setModalOpen(false)}
              displayToast={displayToast}
            />
          </Modal>
        </div>
      </nav>
    </>
  );
}
