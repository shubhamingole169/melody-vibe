import { motion } from 'framer-motion';
import AlbumCard from '../components/AlbumCard';
import tracks from '../data/data.json';
import './Home.css';

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Discover Music</h2>
      <div className="album-grid">
        {tracks.map((track) => (
          <AlbumCard key={track.id} track={track} />
        ))}
      </div>
    </motion.div>
  );
}

export default Home;