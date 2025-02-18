// src/components/QueueComponent.js
import React, { useState } from 'react';
import Queue from '../dataStructures/Queue';

const QueueComponent = () => {
  const [queue, setQueue] = useState(new Queue());
  const [inputValue, setInputValue] = useState('');

  const handleEnqueue = () => {
    queue.enqueue(inputValue);
    setQueue(queue);
    setInputValue('');
  };

  const handleDequeue = () => {
    queue.dequeue();
    setQueue(queue);
  };

  return (
    <div className="data-structure">
      <h2>Queue</h2>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a value"
        />
        <button className="button primary" onClick={handleEnqueue}>
          Enqueue
        </button>
        <button className="button danger" onClick={handleDequeue}>
          Dequeue
        </button>
      </div>
      <div className="output">
        <p>Queue: {queue.toArray().join(', ')}</p>
      </div>
    </div>
  );
};

export default QueueComponent;