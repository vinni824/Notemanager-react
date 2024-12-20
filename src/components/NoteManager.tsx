import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NoteTable from './NoteTable';

interface Note {
  id: number;
  title: string;
  content: string;
}

const NoteManager: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteToEdit, setNoteToEdit] = useState<Note | undefined>(undefined);

  const handleAddNote = (note: Note) => {
    if (noteToEdit) {
      // Update the existing note
      setNotes(prevNotes =>
        prevNotes.map(n => (n.id === note.id ? { ...note } : n))
      );
    } else {
      // Add a new note
      setNotes(prevNotes => [...prevNotes, { ...note, id: Date.now() }]);
    }
    setNoteToEdit(undefined); 
  };

  const handleDeleteNote = (id: number) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const handleEditNote = (note: Note) => {
    setNoteToEdit(note);
  };

  return (
    <div>
      <h1>Add Important Notes</h1>
      <NoteForm onSubmit={handleAddNote} noteToEdit={noteToEdit} />
      <NoteTable notes={notes} onDelete={handleDeleteNote} onEdit={handleEditNote} />
    </div>
  );
};

export default NoteManager;
