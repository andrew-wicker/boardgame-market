import { useEffect, useState } from 'react';
import SearchResultCard from './SearchResultCard';

export interface SearchResult {
  id: string;
  name: string;
  yearpublished: string | null;
  type: string;
}
interface SearchResultsDisplayProps {
  searchTerm: string;
}

export default function SearchResultsDisplay({
  searchTerm,
}: SearchResultsDisplayProps) {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        try {
          const response = await fetch(
            `http://localhost:3000/bg/bgquery?name=${encodeURIComponent(searchTerm)}`,
          );
          const data = await response.json();
          setSearchResults(data);
        } catch (err) {
          console.error('Error fetching data: ', err);
          setSearchResults([]);
        }
      }
    };
    fetchData();
  }, [searchTerm]);

  return (
    <div className="container mx-auto mt-16 flex w-full flex-wrap items-center justify-center">
      {searchResults.map((item, index) => (
        <SearchResultCard
          key={index}
          searchResult={item}
        />
      ))}
    </div>
  );
}
