import { useNoteStore } from '../store/useNoteStore'; 
import { Button } from './ui/Button'; 
import { Moon, Sun } from 'lucide-react'; 
import './Header.css';

export const Header = () => {
  const { darkMode, toggleDarkMode } = useNoteStore();

  const handleDarkModeToggle = () => {
    toggleDarkMode();  
    document.body.classList.toggle('dark', darkMode);  
  };

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <h1 className="title">Noteworthy</h1>
        <Button onClick={handleDarkModeToggle} aria-label="Toggle dark mode">
          {darkMode ? <Sun className="headericon" /> : <Moon className="headericon" />}
        </Button>
      </div>
    </header>
  );
};
