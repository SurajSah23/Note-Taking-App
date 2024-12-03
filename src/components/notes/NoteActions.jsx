import PropTypes from "prop-types";
import { Trash2, Edit3, Check } from "lucide-react";
import { Button } from "../ui/Button";

export const NoteActions = ({ isEditing, onEdit, onSave, onDelete }) => {
  return (
    <div className="flex space-x-2">
      {isEditing ? (
        <Button
          onClick={onSave}
          className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
        >
          <Check className="w-5 h-5" />
        </Button>
      ) : (
        <Button
          onClick={onEdit}
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        >
          <Edit3 className="w-5 h-5" />
        </Button>
      )}
      <Button
        onClick={onDelete}
        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
      >
        <Trash2 className="w-5 h-5" />
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
