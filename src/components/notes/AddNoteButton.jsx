import { PlusCircle } from 'lucide-react';
import { useNoteStore } from '../../store/useNoteStore';
import { getRandomColor } from '../../utils/colors';
import { Button } from '../ui/Button';
import './AddNoteButton.css';

export const AddNoteButton = () => {
  const { addNote } = useNoteStore();

  const handleAddNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: 'New Note',
      content: '',
      color: getRandomColor(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    addNote(newNote);
  };

  return (
    <Button
      onClick={handleAddNote}
      className="add-note-button fixed"
      aria-label="Add a new note"
    >
      <PlusCircle className="icon" />
    </Button>
  );
};
