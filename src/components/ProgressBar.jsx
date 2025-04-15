import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ProgressBar.css';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress-bar">
      <motion.div
        className="progress"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}

export default ProgressBar;