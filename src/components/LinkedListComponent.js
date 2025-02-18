// src/components/LinkedListComponent.js
import React, { useState } from 'react';
import LinkedList from '../dataStructures/LinkedList';

const LinkedListComponent = () => {
  const [list, setList] = useState(new LinkedList());
  const [inputValue, setInputValue] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInsert = () => {
    if (inputValue.trim() === '') return; // Prevent empty input
    list.insert(inputValue);
    setList(list);
    setInputValue('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000); // Hide success message after 2 seconds
  };

  const handleDelete = () => {
    list.delete(inputValue);
    setList(list);
    setInputValue('');
  };

  return (
    <div className="data-structure">
      <h2>Linked List</h2>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a value"
        />
        <button className="button primary" onClick={handleInsert}>
          Insert
        </button>
        <button className="button danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <div className={`success-message ${showSuccess ? 'visible' : ''}`}>
        Value inserted successfully!
      </div>
      <div className="output">
        <p>
          List:{' '}
          {list.toArray().map((item, index) => (
            <span key={index} className="list-item highlight">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default LinkedListComponent;