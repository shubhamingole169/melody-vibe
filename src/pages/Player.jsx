import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PlayerControls from '../components/PlayerControls';
import ProgressBar from '../components/ProgressBar';
import tracks from '../data/data.json';
import './Player.css';

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();
  const track = tracks.find((t) => t.id === parseInt(id)) || tracks[0];
  const currentIndex = tracks.findIndex((t) => t.id === parseInt(id));

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % tracks.length;
    navigate(`/player/${tracks[nextIndex].id}`);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    navigate(`/player/${tracks[prevIndex].id}`);
  };

  return (
    <motion.div
      className="player"
      style={{ background: `url(${track.cover}) center/cover no-repeat` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="player-overlay">
        <motion.img
          src={track.cover}
          alt={`${track.album} cover`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h2>{track.title}</h2>
        <p>{track.artist}</p>
        <ProgressBar />
        <PlayerControls onNext={handleNext} onPrev={handlePrev} />
      </div>
    </motion.div>
  );
}

export default Player;