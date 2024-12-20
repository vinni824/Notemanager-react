import React from 'react';
import './App.css';
import NoteManager from './components/NoteManager';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Note Manager</h1>
      </header>
      <main>
        <NoteManager />
      </main>
    </div>
  );
};

export default App;
