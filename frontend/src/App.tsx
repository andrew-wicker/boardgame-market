import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Search from './components/Search';
import TopBar from './components/TopBar';
import SearchResultCard from './components/SearchResultCard';

export interface SearchResult {
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
    fetch(
      `http://localhost:3000/bg/bgquery?name=${encodeURIComponent(searchTerm)}`,
      {
        method: 'GET',
      },
    )
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
    <div className="flex flex-col justify-between">
      <TopBar />
      <Hero />
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <div className="mx-auto mt-16 flex w-full flex-wrap items-center justify-center">
        {searchResults.map((item, index) => (
          <SearchResultCard
            key={index}
            searchResult={item}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
