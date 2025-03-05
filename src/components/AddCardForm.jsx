import React, { useState } from 'react';

const AddCardForm = ({ onAddCard }) => {
  const [showForm, setShowForm] = useState(false);
  const [cardData, setCardData] = useState({
    title: '',
    description: ''
  });

  const handleSubmit = () => {
    onAddCard(cardData);
    setCardData({ title: '', description: '' });
    setShowForm(false);
  };

  if (showForm) {
    return (
      <div className="p-2 bg-gray-50">
        <input
          type="text"
          value={cardData.title}
          onChange={(e) => setCardData({...cardData, title: e.target.value})}
          placeholder="Card title"
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          value={cardData.description}
          onChange={(e) => setCardData({...cardData, description: e.target.value})}
          placeholder="Description"
          className="w-full p-2 mb-2 border rounded"
          rows="2"
        />
        <div className="flex justify-between">
          <button 
            onClick={handleSubmit}
            className="bg-green-500 text-white px-3 py-2 rounded text-sm"
          >
            Add
          </button>
          <button 
            onClick={() => setShowForm(false)}
            className="text-gray-500 px-3 py-2 rounded text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-2">
      <button 
        onClick={() => setShowForm(true)}
        className="w-full text-left text-gray-500 p-2 hover:bg-gray-200 rounded"
      >
        + Add a card
      </button>
    </div>
  );
};

export default AddCardForm;