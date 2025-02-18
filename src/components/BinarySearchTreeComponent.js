// src/components/BinarySearchTreeComponent.js
import React, { useState } from 'react';
import BinarySearchTree from '../dataStructures/BinarySearchTree';

const BinarySearchTreeComponent = () => {
  const [bst, setBst] = useState(new BinarySearchTree());
  const [inputValue, setInputValue] = useState('');

  const handleInsert = () => {
    bst.insert(Number(inputValue));
    setBst(bst);
    setInputValue('');
  };

  const handleSearch = () => {
    const found = bst.search(Number(inputValue));
    alert(found ? 'Value found!' : 'Value not found.');
  };

  return (
    <div className="data-structure">
      <h2>Binary Search Tree</h2>
      <div className="input-group">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
        />
        <button className="button primary" onClick={handleInsert}>
          Insert
        </button>
        <button className="button success" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="output">
        <p>In-order Traversal: {bst.toArray().join(', ')}</p>
      </div>
    </div>
  );
};

export default BinarySearchTreeComponent;