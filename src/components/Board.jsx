import React from 'react';
import Card from './Card';
import AddCardForm from './AddCardForm';

const Board = ({ 
  board, 
  onDeleteBoard, 
  onAddCard, 
  onDeleteCard, 
  onDragStart, 
  onDragOver, 
  onDrop 
}) => {
  return (
    <div 
      className="flex-shrink-0 w-full md:w-72 bg-gray-100 rounded-md shadow-md flex flex-col mb-4 md:mb-0 max-h-96 md:max-h-full"
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, board.id)}
    >
      {/* Board header */}
      <div className="p-3 flex justify-between items-center bg-gray-200 rounded-t-md">
        <h2 className="font-bold text-gray-700">{board.title}</h2>
        <button 
          onClick={() => onDeleteBoard(board.id)}
          className="text-gray-500 hover:text-red-600"
        >
          ×
        </button>
      </div>
      
      {/* Card list */}
      <div className="p-2 flex-1 overflow-y-auto">
        {board.cards.map(card => (
          <Card 
            key={card.id} 
            card={card} 
            onDelete={() => onDeleteCard(board.id, card.id)}
            onDragStart={() => onDragStart(board.id, card)}
          />
        ))}
      </div>
      
      {/* Add card form */}
      <AddCardForm onAddCard={(cardData) => onAddCard(board.id, cardData)} />
    </div>
  );
};

export default Board;