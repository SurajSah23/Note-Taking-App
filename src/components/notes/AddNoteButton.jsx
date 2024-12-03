import { PlusCircle } from "lucide-react";
import { useNoteStore } from "../../store/useNoteStore";
import { getRandomColor } from "../../utils/colors";
import { Button } from "../ui/Button";

export const AddNoteButton = () => {
  const { addNote } = useNoteStore();

  const handleAddNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: "New Note",
      content: "",
      color: getRandomColor(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    addNote(newNote);
  };

  return (
    <Button
      onClick={handleAddNote}
      className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
      aria-label="Add a new note"
    >
      <PlusCircle className="w-6 h-6" />
    </Button>
  );
};
