import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Search from './components/Search';
import TopBar from './components/TopBar';
import SearchResultCard from './components/SearchResultCard';
import Collection from './components/Collection';
import Toast from './components/Toast';
import { AuthProvider } from './components/AuthContext';
import UserContext from './contexts/UserContext';

export interface SearchResult {
  id: string;
  name: string;
  yearpublished: string | null;
  type: string;
}

type ViewType = 'search' | 'collection';

export default function App() {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [view, setView] = useState<ViewType>('search');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

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
        <div className="mt-20">
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
            <Collection view={view} />
          )}
        </div>
      </AuthProvider>
    </div>
  );
}
