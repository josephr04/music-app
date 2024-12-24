import React, { useState } from 'react';

export function PlayerBar() {
  const [expanded, setExpanded] = useState(false);

  const togglePlayerBar = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-gray-900 transition-all duration-500 z-4 ${
        expanded ? 'h-screen' : 'h-16'
      }`}
    >
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={togglePlayerBar}
      >
        {/* Play icon */}
        <div className="flex items-center">
          <span className="text-white">🎵</span>
          <span className="text-white ml-2">Now Playing</span>
        </div>

        {/* Progress bar */}
        <div className="flex-grow mx-4 bg-gray-600 h-1 rounded-full"></div>

        {/* Action button */}
        <button className="text-white">⏯️</button>
      </div>
    </div>
  );
}
