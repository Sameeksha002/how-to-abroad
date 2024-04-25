import React, { useState } from 'react';

const ToolsCard = ({ tool }) => {
  const [isClicked, setIsClicked] = useState(false);

  const cardStyle = {
    backgroundImage: `url(${tool.image})`,
  };

  const handleDivClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden h-96">
      <div className="bg-cover bg-center absolute top-0 left-0 w-full h-full" style={cardStyle}></div>
      <div className={`relative z-10 p-4 flex flex-col justify-end h-full bg-black/30 ${isClicked ? 'animate-fade-up' : ''}`} onClick={handleDivClick}>
        <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
        <p className="text-sm text-white">Date: {tool.date}</p>
      </div>
    </div>
  );
};

export default ToolsCard;