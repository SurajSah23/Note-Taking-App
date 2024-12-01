import { create } from 'zustand';
import { loadFromStorage, saveToStorage } from '../utils/storage';

export const useNoteStore = create((set) => ({
  notes: loadFromStorage('notes', []),
  darkMode: loadFromStorage('darkMode', false),
  
  addNote: (note) =>
    set((state) => {
      const newNotes = [...state.notes, note];
      saveToStorage('notes', newNotes);
      return { notes: newNotes };
    }),
    
  updateNote: (id, updates) =>
    set((state) => {
      const newNotes = state.notes.map((note) =>
        note.id === id ? { ...note, ...updates, updatedAt: Date.now() } : note
      );
      saveToStorage('notes', newNotes);
      return { notes: newNotes };
    }),
    
  deleteNote: (id) =>
    set((state) => {
      const newNotes = state.notes.filter((note) => note.id !== id);
      saveToStorage('notes', newNotes);
      return { notes: newNotes };
    }),
    
  toggleDarkMode: () =>
    set((state) => {
      const newDarkMode = !state.darkMode;
      saveToStorage('darkMode', newDarkMode);
      return { darkMode: newDarkMode };
    }),
}));