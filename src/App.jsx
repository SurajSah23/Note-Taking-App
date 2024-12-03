import { Header } from "./components/Header";
import { NoteCard } from "./components/notes/NoteCard";
import { AddNoteButton } from "./components/notes/AddNoteButton";
import { useNoteStore } from "./store/useNoteStore";

function App() {
  const { notes, darkMode } = useNoteStore();

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen`}>
      <div className="container mx-auto px-4 py-6">
        <Header />
        <main className="mt-6">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
          {notes.length === 0 && (
            <div className="mt-10 text-center">
              <p className="text-lg text-gray-500 dark:text-gray-400">
                No notes yet. Click the <span className="text-blue-500 font-semibold">+</span> button to create one!
              </p>
            </div>
          )}
        </main>
        <AddNoteButton />
      </div>
    </div>
  );
}

export default App;
