// src/components/MainWindow.js
import React from 'react';
import Store from './Store';
import About from './About';
import './MainWindow.css';


function MainWindow({ activeFolder }) {
  // Render different components based on which folder is active
  return (
    <div className="main-window">
      {activeFolder === 'store' && <Store />}
      {activeFolder === 'about' && <About />}
    </div>
  );
}

export default MainWindow;
