interface SearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  handleSearch: () => void;
}

export default function Search({ searchTerm, setSearchTerm, handleSearch }: SearchProps) {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div>
          <input
            type='text'
            placeholder='Search games...'
            className='text-night-500 p-2 rounded-2xl border-2 border-night-900 w-96 mb-4'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          className='bg-emerald-700 hover:bg-emerald-400 hover:text-emerald-100 hover:border-emerald-200 font-bold py-2 px-4 rounded'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
}
