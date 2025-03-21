// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css'; // We'll make this for styling

function Sidebar({ onFolderSelect }) {
  return (
    <div className="sidebar">
      <div className="folder" onClick={() => onFolderSelect('store')}>
        <img src="/folder-icon.png" alt="folder icon" />
        <span>STORE</span>
      </div>
      <div className="folder" onClick={() => onFolderSelect('about')}>
        <img src="/folder-icon.png" alt="folder icon" />
        <span>ABOUT</span>
      </div>
      <div className="folder" onClick={() => window.open('https://instagram.com/unemployed.boys.club', '_blank')}>
        <img src="/folder-icon.png" alt="folder icon" />
        <span>INSTAGRAM</span>
      </div>
    </div>
  );
}

export default Sidebar;
