import React from 'react';
import Label from './Label';

const Card = ({ card, onDelete, onDragStart }) => {
  return (
    <div 
      className="bg-white p-3 rounded-md shadow mb-2 cursor-move touch-manipulation"
      draggable
      onDragStart={onDragStart}
    >
      {/* Card labels */}
      <div className="flex flex-wrap gap-1 mb-2">
        {card.labels && card.labels.map(label => (
          <Label key={label} type={label} />
        ))}
      </div>
      
      {/* Card title and content */}
      <h3 className="font-semibold mb-1">{card.title}</h3>
      <p className="text-sm text-gray-600">{card.description}</p>
      
      {/* Card actions */}
      <div className="mt-2 flex justify-end">
        <button 
          onClick={onDelete}
          className="text-xs text-gray-500 hover:text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;