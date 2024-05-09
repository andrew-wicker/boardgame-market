import { useState } from 'react';

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    fetch(`/bg/bgquery?name=${encodeURIComponent(searchTerm)}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        data.map((item) => {});
      })
      .catch((err) => {
        console.error(`Error fetching data: `, err);
      });
  };

  return (
    <div className='bg-white text-night-500 text-center py-24 flex justify-center items-center flex-col font-sans'>
      <div className='w-screen  max-h-[40vh] bg-emerald-400 overflow-hidden object-center mb-4'>
        <img
          src='/images/hero-img.webp'
          className='object-contain w-full h-full '
        />
      </div>
      <h1 className='text-4xl font-bold mb-2'>Welcome to Game Collector!</h1>
      <p className='text-xl mb-4'>Track your collection and the outcomes of your plays!</p>
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
  );
}
