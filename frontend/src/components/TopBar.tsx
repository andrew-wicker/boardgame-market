import { useState } from 'react';
import { SquareUserRound } from 'lucide-react';
import Modal from 'react-modal';
import AuthForm from './AuthForm';
import { useAuth } from './AuthContext';

Modal.setAppElement('#root');

export default function TopBar() {
  const [modalOpen, setModalOpen] = useState(false);
  const { isAuthed, logout } = useAuth();

  const handleAuthClick = () => {
    if (isAuthed) {
      logout();
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <nav className="fixed left-0 top-0 flex min-h-20 w-screen items-center justify-between bg-white p-4 font-sans">
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            className="h-auto w-20"
          />
          <div className="mt-2 text-4xl font-bold">K-LAX</div>
        </div>
        <div className="mx-4 flex flex-col items-center justify-center">
          <button
            className="flex flex-col items-center justify-center text-center text-emerald-700 hover:text-emerald-200"
            onClick={handleAuthClick}
          >
            <SquareUserRound size={36} />
            {isAuthed ? 'Logout' : 'Login'}
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
            <AuthForm closeModal={() => setModalOpen(false)} />
          </Modal>
        </div>
      </nav>
    </>
  );
}
