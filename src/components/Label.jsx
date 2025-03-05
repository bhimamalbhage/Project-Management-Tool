import React from 'react';

const Label = ({ type }) => {
  // Label colors
  const getLabelColor = (label) => {
    const colors = {
      task: 'bg-blue-500',
      bug: 'bg-red-500',
      styling: 'bg-purple-500',
      project: 'bg-green-500',
      setup: 'bg-yellow-500'
    };
    
    return colors[label] || 'bg-gray-500';
  };

  return (
    <span 
      className={`${getLabelColor(type)} px-2 py-1 text-xs text-white rounded-full`}
    >
      {type}
    </span>
  );
};

export default Label;