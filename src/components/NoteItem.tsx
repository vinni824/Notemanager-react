import React from 'react';

interface Note {
  id: number;
  title: string;
  content: string;
}

interface NoteItemProps {
  note: Note;
  onDelete: (id: number) => void;
  onEdit: (note: Note) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onDelete, onEdit }) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onEdit(note)} data-testid="edit-button">
        Edit
      </button>
      <button onClick={() => onDelete(note.id)} data-testid="delete-button">
        Delete
      </button>
    </div>
  );
};

export default NoteItem;
