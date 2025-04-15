import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './AlbumCard.css';

function AlbumCard({ track }) {
  return (
    <motion.div
      className="album-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link to={`/player/${track.id}`} aria-label={`Play ${track.title}`}>
        <img src={track.cover} alt={`${track.album} cover`} />
        <div className="album-info">
          <h3>{track.title}</h3>
          <p>{track.artist}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default AlbumCard;