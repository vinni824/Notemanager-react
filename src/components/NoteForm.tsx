import React, { useState, useEffect } from 'react';

interface Note {
  id: number;
  title: string;
  content: string;
}

interface NoteFormProps {
  onSubmit: (note: Note) => void;
  noteToEdit?: Note;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSubmit, noteToEdit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    }
  }, [noteToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      const note: Note = { id: noteToEdit?.id || Date.now(), title, content };
      onSubmit(note);
      setTitle('');
      setContent('');
    }
  };

  const isDisabled = !title || !content;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        data-testid="form-input"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
        data-testid="form-textarea"
      />
      <button type="submit" disabled={isDisabled} data-testid="form-submit-button">
        {noteToEdit ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
};

export default NoteForm;
