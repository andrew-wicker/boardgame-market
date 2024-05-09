import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Search from './components/Search';
import TopBar from './components/TopBar';

interface SearchResult {
  id: string;
  name: string;
  yearpublished: string | null;
  type: string;
}

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearch = () => {
    fetch(`/bg/bgquery?name=${encodeURIComponent(searchTerm)}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
      })
      .catch((err) => {
        console.error(`Error fetching data: `, err);
        setSearchResults([]);
      });
  };

  return (
    <div className='flex flex-col justify-between'>
      <TopBar />
      <Hero />
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      {searchResults.map((item) => (
        <div>
          <p>{item.name}</p>
          <p>{item.type}</p>
          <p>{item.yearpublished}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
