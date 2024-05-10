import { useState } from 'react';
import { SquareUserRound } from 'lucide-react';
import Modal from 'react-modal';
import AuthForm from './AuthForm';

Modal.setAppElement('#root');

export default function TopBar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 top-0 flex min-h-20 w-screen items-center justify-between bg-white p-4 font-sans">
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            className="h-auto w-20"
          />
          <div className="mt-2 text-2xl">K-Lax</div>
        </div>
        <div className="mr-4 flex items-center justify-center">
          <button
            className="text-emerald-700 hover:text-emerald-200"
            onClick={() => setModalOpen(true)}
          >
            <SquareUserRound size={36} />
          </button>
          <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            contentLabel="User Authentication"
            className="absolute bottom-1/4 left-1/4 right-1/4 top-1/4 rounded bg-white p-5 shadow-lg"
          >
            <AuthForm />
          </Modal>
        </div>
      </nav>
    </>
  );
}
