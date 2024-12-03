import PropTypes from 'prop-types';

export const NoteEditor = ({ title, content, onTitleChange, onContentChange }) => {
  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        className="w-full p-3 mb-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        placeholder="Note title"
      />
      <textarea
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        className="w-full h-40 p-3 text-base border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
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
