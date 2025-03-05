import React, { useState } from 'react';

const AddBoardForm = ({ onAddBoard }) => {
  const [newBoardTitle, setNewBoardTitle] = useState('');

  const handleAddBoard = () => {
    onAddBoard(newBoardTitle);
    setNewBoardTitle('');
  };

  return (
    <div className="flex-shrink-0 w-full md:w-72 bg-gray-100 rounded-md shadow-md p-3">
      <input
        type="text"
        value={newBoardTitle}
        onChange={(e) => setNewBoardTitle(e.target.value)}
        placeholder="Enter board title"
        className="w-full p-2 mb-2 border rounded"
      />
      <button 
        onClick={handleAddBoard}
        className="bg-blue-500 text-white px-3 py-2 rounded w-full"
      >
        Add Board
      </button>
    </div>
  );
};

export default AddBoardForm;