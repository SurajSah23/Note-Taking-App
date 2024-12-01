import { useNoteStore } from '../store/useNoteStore';
import { Button } from './ui/Button';
import { Moon, Sun } from 'lucide-react';
import './Header.css';

export const Header = () => {
  const { darkMode, toggleDarkMode } = useNoteStore();

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <h1 className="title">Noteworthy</h1>
        <Button onClick={toggleDarkMode} aria-label="Toggle dark mode">
          {darkMode ? <Sun className="icon" /> : <Moon className="icon" />}
        </Button>
      </div>
    </header>
  );
};
