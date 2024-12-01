import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNoteStore } from '../../store/useNoteStore';
import { NoteEditor } from './NoteEditor';
import { NoteActions } from './NoteActions';
import './NoteCard.css'; 

export const NoteCard = ({ note }) => {
  const { updateNote, deleteNote } = useNoteStore();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    updateNote(note.id, { title, content });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      deleteNote(note.id);
    }
  };

  return (
    <div className="note-card" style={{ backgroundColor: note.color + '20' }}>
      <div className="note-card-content">
        {isEditing ? (
          <NoteEditor
            title={title}
            content={content}
            onTitleChange={setTitle}
            onContentChange={setContent}
          />
        ) : (
          <>
            <h3 className="note-title">{note.title}</h3>
            <p className="note-content">{note.content}</p>
          </>
        )}
      </div>
      <NoteActions
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </div>
  );
};

NoteCard.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    createdAt: PropTypes.number.isRequired,
    updatedAt: PropTypes.number.isRequired,
  }).isRequired,
};
