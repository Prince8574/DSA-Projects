// src/components/StackComponent.js
import React, { useState } from 'react';
import Stack from '../dataStructures/Stack';

const StackComponent = () => {
  const [stack, setStack] = useState(new Stack());
  const [inputValue, setInputValue] = useState('');

  const handlePush = () => {
    stack.push(inputValue);
    setStack(stack);
    setInputValue('');
  };

  const handlePop = () => {
    stack.pop();
    setStack(stack);
  };

  return (
    <div className="data-structure">
      <h2>Stack</h2>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a value"
        />
        <button className="button primary" onClick={handlePush}>
          Push
        </button>
        <button className="button danger" onClick={handlePop}>
          Pop
        </button>
      </div>
      <div className="output">
        <p>Stack: {stack.toArray().join(', ')}</p>
      </div>
    </div>
  );
};

export default StackComponent;