import { useNavigate } from 'react-router';

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function Search({ searchTerm, setSearchTerm }: SearchProps) {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/searchResults');
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <input
            type="text"
            placeholder="Search games..."
            className="mb-4 w-96 rounded-2xl border-2 border-night-900 p-2 text-night-500 focus:border-emerald-400 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          className="rounded bg-emerald-700 px-4 py-2 font-bold hover:border-emerald-200 hover:bg-emerald-400 hover:text-emerald-100"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
}
