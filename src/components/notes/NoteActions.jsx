import PropTypes from 'prop-types';
import { Trash2, Edit3, Check } from 'lucide-react';
import { Button } from '../ui/Button';
import './NoteActions.css';

export const NoteActions = ({ isEditing, onEdit, onSave, onDelete }) => {
  return (
    <div className="note-actions">
      {isEditing ? (
        <Button
          onClick={onSave}
          className="note-actions-button save"
        >
          <Check className="icon" />
        </Button>
      ) : (
        <Button
          onClick={onEdit}
          className="note-actions-button edit"
        >
          <Edit3 className="icon" />
        </Button>
      )}
      <Button
        onClick={onDelete}
        className="note-actions-button delete"
      >
        <Trash2 className="icon" />
      </Button>
    </div>
  );
};

NoteActions.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
