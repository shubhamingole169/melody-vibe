import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Player from './pages/Player';
import Playlist from './pages/Playlist';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player/:id" element={<Player />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;