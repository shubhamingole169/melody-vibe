import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Apply dark mode by default
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="header"
    >
      <h1>MelodyVibe</h1>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/playlist" className={({ isActive }) => (isActive ? 'active' : '')}>
          Playlist
        </NavLink>
        <motion.button
          onClick={toggleTheme}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isDarkMode ? '🌙' : '☀️'}
        </motion.button>
      </nav>
    </motion.header>
  );
}

export default Header;