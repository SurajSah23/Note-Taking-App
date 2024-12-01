import PropTypes from 'prop-types';
import './NoteEditor.css'; 

export const NoteEditor = ({ title, content, onTitleChange, onContentChange }) => {
  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        className="note-editor-title"
        placeholder="Note title"
      />
      <textarea
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        className="note-editor-content"
        placeholder="Note content"
      />
    </>
  );
};

NoteEditor.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onContentChange: PropTypes.func.isRequired,
};
