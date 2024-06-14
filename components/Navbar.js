// components/Navbar.js
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo">My Chat App</div>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : theme === 'dark' ? 'Midnight' : theme === 'midnight' ? 'RedBlack' : 'Light'} Theme
      </button>
    </nav>
  );
};

export default Navbar;
