import { useState } from 'react';
import { motion } from 'framer-motion';
import './PlayerControls.css';

function PlayerControls({ onNext, onPrev }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeated, setIsRepeated] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleShuffle = () => setIsShuffled(!isShuffled);
  const toggleRepeat = () => setIsRepeated(!isRepeated);

  return (
    <div className="player-controls">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleShuffle}
        aria-label="Shuffle"
        className={isShuffled ? 'active' : ''}
      >
        🔀
      </motion.button>
      <motion.button whileTap={{ scale: 0.9 }} onClick={onPrev} aria-label="Previous track">
        ⏮
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause' : 'Play'}
        className="play-btn"
      >
        {isPlaying ? '⏸' : '▶'}
      </motion.button>
      <motion.button whileTap={{ scale: 0.9 }} onClick={onNext} aria-label="Next track">
        ⏭
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleRepeat}
        aria-label="Repeat"
        className={isRepeated ? 'active' : ''}
      >
        🔁
      </motion.button>
    </div>
  );
}

export default PlayerControls;