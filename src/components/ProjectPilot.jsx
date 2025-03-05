import React, { useState } from 'react';
import Board from './Board';
import AddBoardForm from './AddBoardForm';
import Header from './Header';

const ProjectPilot = () => {

  const [boards, setBoards] = useState([
    {
      id: 1,
      title: 'To Do',
      cards: [
        { id: 1, title: 'Build Project Pilot v2', description: 'Next Milestone', labels: ['task'] },
        { id: 2, title: 'User Authentication', description: 'Create Authentication Flow', labels: ['task'] }
      ]
    },
    {
      id: 2,
      title: 'In Progress',
      cards: [
        { id: 3, title: 'Build Project Pilot', description: 'Create a simplified version of Project Pilot', labels: ['project'] },
        { id: 4, title: 'Mobile View', description: 'Make it Responsive', labels: ['task'] }
      ]
    },
    {
      id: 3,
      title: 'Done',
      cards: [
        { id: 5, title: 'Setup Development Environment', description: 'Install necessary tools', labels: ['setup'] }
      ]
    }
  ]);

  // State for tracking card being dragged
  const [draggedCard, setDraggedCard] = useState(null);

  // Add a new board
  const addBoard = (title) => {
    if (title.trim() !== '') {
      setBoards([
        ...boards,
        {
          id: Date.now(),
          title: title,
          cards: []
        }
      ]);
    }
  };

  // Delete a board
  const deleteBoard = (boardId) => {
    setBoards(boards.filter(board => board.id !== boardId));
  };

  // Add a new card to a specific board
  const addCard = (boardId, cardData) => {
    if (cardData.title.trim() !== '') {
      const updatedBoards = boards.map(board => {
        if (board.id === boardId) {
          return {
            ...board,
            cards: [
              ...board.cards,
              {
                id: Date.now(),
                title: cardData.title,
                description: cardData.description,
                labels: []
              }
            ]
          };
        }
        return board;
      });
      
      setBoards(updatedBoards);
    }
  };

  // Delete a card from a board
  const deleteCard = (boardId, cardId) => {
    const updatedBoards = boards.map(board => {
      if (board.id === boardId) {
        return {
          ...board,
          cards: board.cards.filter(card => card.id !== cardId)
        };
      }
      return board;
    });
    
    setBoards(updatedBoards);
  };

  // Handle drag start for a card
  const handleDragStart = (boardId, card) => {
    setDraggedCard({ boardId, card });
  };

  // Handle drag over for a board
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle drop of a card onto a board
  const handleDrop = (e, targetBoardId) => {
    e.preventDefault();
    
    if (draggedCard && draggedCard.boardId !== targetBoardId) {
      const updatedBoards = boards.map(board => {
        // Remove card from source board
        if (board.id === draggedCard.boardId) {
          return {
            ...board,
            cards: board.cards.filter(card => card.id !== draggedCard.card.id)
          };
        }
        
        // Add card to target board
        if (board.id === targetBoardId) {
          return {
            ...board,
            cards: [...board.cards, draggedCard.card]
          };
        }
        
        return board;
      });
      
      setBoards(updatedBoards);
      setDraggedCard(null);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-blue-50">
      <Header />
      
      {/* Main content */}
      <div className="flex-1 overflow-x-auto p-2 md:p-4">
        <div className="flex flex-col md:flex-row items-start gap-4">
          {/* Boards */}
          {boards.map(board => (
            <Board 
              key={board.id}
              board={board}
              onDeleteBoard={deleteBoard}
              onAddCard={addCard}
              onDeleteCard={deleteCard}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            />
          ))}
          
          {/* Add new board */}
          <AddBoardForm onAddBoard={addBoard} />
        </div>
      </div>
    </div>
  );
};

export default ProjectPilot;