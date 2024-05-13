interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  return (
    <div className="fixed bottom-10 right-10 z-50 flex w-auto max-w-sm items-center justify-between rounded-md bg-black px-4 py-2 text-white shadow-lg">
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-sm font-bold"
      >
        X
      </button>
    </div>
  );
}
