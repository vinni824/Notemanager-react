import React from 'react';
import NoteItem from './NoteItem';

interface Note {
  id: number;
  title: string;
  content: string;
}

interface NoteTableProps {
  notes: Note[];
  onDelete: (id: number) => void;
  onEdit: (note: Note) => void;
}

const NoteTable: React.FC<NoteTableProps> = ({ notes, onDelete, onEdit }) => {
  return (
    <div data-testid="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default NoteTable;
