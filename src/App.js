// src/App.js
import React from 'react';
import './App.css'; // Import the CSS file
import LinkedListComponent from './components/LinkedListComponent';
import StackComponent from './components/StackComponent';
import QueueComponent from './components/QueueComponent';
import BinarySearchTreeComponent from './components/BinarySearchTreeComponent';

function App() {
  return (
    <div className="container">
      <h1 className="header">Data Structure Library</h1>
      <div>
        <LinkedListComponent />
        <StackComponent />
        <QueueComponent />
        <BinarySearchTreeComponent />
      </div>
    </div>
  );
}

export default App;