import './App.css';
import Hero from './components/Hero';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className='flex flex-col'>
      <TopBar />
      <Hero />
    </div>
  );
}

export default App;
