import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainWindow from './components/MainWindow';
import './App.css';

function App() {
  // We'll store which folder is selected
  const [activeFolder, setActiveFolder] = useState('store');

  return (
    <div className="app-container">
      <Sidebar onFolderSelect={setActiveFolder} />
      <MainWindow activeFolder={activeFolder} />
    </div>
  );
}

export default App;
