import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Search from './components/Search';
import TopBar from './components/TopBar';
import SearchResultCard from './components/SearchResultCard';
import Collection from './components/Collection';
import Toast from './components/Toast';

export interface SearchResult {
  id: string;
  name: string;
  yearpublished: string | null;
  type: string;
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const displayToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleSearch = () => {
    fetch(
      `http://localhost:3000/bg/bgquery?name=${encodeURIComponent(searchTerm)}`,
      {
        method: 'GET',
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('data: ', data);
        setSearchResults(data);
      })
      .catch((err) => {
        console.error(`Error fetching data: `, err);
        setSearchResults([]);
      });
  };

  return (
    <>
      {showToast && (
        <Toast
          message={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}
      <TopBar displayToast={displayToast} />
      <div className="mt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route
            path="/collection"
            element={<Collection />}
          />
        </Routes>
      </div>
    </>
  );
}
