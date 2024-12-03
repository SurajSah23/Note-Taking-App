import { useNoteStore } from "../store/useNoteStore";
import { Button } from "./ui/Button";
import { Moon, Sun } from "lucide-react";

export const Header = () => {
  const { darkMode, toggleDarkMode } = useNoteStore();

  const handleDarkModeToggle = () => {
    toggleDarkMode();
    document.body.classList.toggle("dark", darkMode);
  };

  return (
    <header
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } py-4 shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Noteworthy</h1>
        <Button
          onClick={handleDarkModeToggle}
          aria-label="Toggle dark mode"
          className="flex items-center justify-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-gray-600" />
          )}
        </Button>
      </div>
    </header>
  );
};
