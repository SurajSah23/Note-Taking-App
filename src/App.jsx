import { Header } from './components/Header';
import { NoteCard } from './components/notes/NoteCard';
import { AddNoteButton } from './components/notes/AddNoteButton';
import { useNoteStore } from './store/useNoteStore';
import './App.css';

function App() {
  const { notes, darkMode } = useNoteStore();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <div className="note-grid">
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
          {notes.length === 0 && (
            <div className="no-notes-message">
              <p>No notes yet. Click the + button to create one!</p>
            </div>
          )}
        </main>
        <AddNoteButton />
      </div>
    </div>
  );
}

export default App;
