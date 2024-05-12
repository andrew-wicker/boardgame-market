import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Search from './components/Search';
import TopBar from './components/TopBar';
import SearchResultCard from './components/SearchResultCard';
import Collection from './components/Collection';
import Toast from './components/Toast';
import { AuthProvider } from './components/AuthContext';

export interface SearchResult {
  id: string;
  name: string;
  yearpublished: string | null;
  type: string;
}

type ViewType = 'search' | 'collection';

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [view, setView] = useState<ViewType>('search');
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
    <div className="flex flex-col justify-between">
      <AuthProvider>
        {showToast && (
          <Toast
            message={toastMessage}
            onClose={() => setShowToast(false)}
          />
        )}
        <TopBar
          setView={setView}
          displayToast={displayToast}
        />
        {view === 'search' ? (
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
        ) : (
          <Collection />
        )}
      </AuthProvider>
    </div>
  );
}

export default App;
