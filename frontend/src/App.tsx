import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Search from './components/Search';
import TopBar from './components/TopBar';
import SearchResultsDisplay from './components/SearchResultsDisplay';
import Collection from './components/Collection';
import Toast from './components/Toast';

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const location = useLocation();

  const displayToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  useEffect(() => {
    setSearchTerm('');
  }, [location.pathname]);

  return (
    <div>
      <div
        id="topbar"
        className="container"
      >
        {showToast && (
          <Toast
            message={toastMessage}
            onClose={() => setShowToast(false)}
          />
        )}
        <TopBar displayToast={displayToast} />
      </div>
      <div className="container">
        <Routes>
          <Route
            path="/main"
            element={
              <>
                <Hero />
                <Search
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                <Hero />
                <Search
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              </>
            }
          />
          <Route
            path="/searchResults"
            element={<SearchResultsDisplay searchTerm={searchTerm} />}
          />
          <Route
            path="/collection"
            element={<Collection />}
          />
        </Routes>
      </div>
    </div>
  );
}
