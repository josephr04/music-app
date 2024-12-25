import React, { useState, useEffect } from 'react';
import { Slider } from '@components/Slider'

export function PlayerBar() {
  const [expanded, setExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const togglePlayerBar = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (expanded) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  
    return () => document.body.classList.remove('no-scroll');
  }, [expanded]);  

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-gray-900 transition-all duration-500 z-4 ${
        expanded ? 'h-screen' : 'h-16'
      }`}
    >

      <div
        className="flex items-center justify-between"
        onClick={!expanded ? togglePlayerBar : undefined}
      >
        {!expanded ? (
          <>
            {/* Mini Player */}
            <div className="flex items-center mt-2 cursor-pointer">
              <span className="text-white">🎵</span>
              <span className="text-white ml-2">Now Playing</span>
            </div>
            <div className="flex-grow mx-4 bg-gray-600 h-1 rounded-full"></div>
            <button className="text-white">⏯️</button>
          </>
        ) : (
          <>
            {/* Full-Screen Player */}
            <div className="w-full h-full flex flex-col items-center justify-center text-white">
              <button
                onClick={togglePlayerBar}
                className="absolute top-8 left-4 text-white text-2xl rounded-full p-2 hover:bg-gray-600 transition-all"
              >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
              </button>
              <div className="w-80 h-80 mt-28 bg-gray-700 rounded-lg shadow-md flex items-center justify-center">
                🎵 Song Art
              </div>
              <div className='mt-8'>
                <h1 className="text-2xl font-bold mr-52">Song Title</h1>
                <h1 className="text-lg mr-56 text-slate-400">Artist Name</h1>
              </div>
              <div className="w-3/4 h-2 mt-4">
                <Slider />
              </div>
              {/* Control panel*/}
              <div className="flex items-center space-x-4 mt-12">
                {/* Back button */}
                <div className='flex items-center justify-center w-14 h-14 hover:bg-slate-800 rounded-full'>
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-player-skip-back"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z" /><path d="M4 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" /></svg>
                </div>
                {/* play/pause button */}
                <div onClick={togglePlayPause} className='flex items-center justify-center w-20 h-20 bg-white rounded-full'>
                  {isPlaying ? (
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="36"  height="36"  viewBox="0 0 24 24"  fill="black"  className="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
                  ) : (
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="36"  height="36"  viewBox="0 0 24 24"  fill="black"  className="icon icon-tabler icons-tabler-filled icon-tabler-player-pause"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /></svg>                  )}                
                </div>
                {/* Next button */}
                <div className='flex items-center justify-center w-14 h-14 hover:bg-slate-800 rounded-full'>
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-player-skip-forward"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5v14a1 1 0 0 0 1.504 .864l12 -7a1 1 0 0 0 0 -1.728l-12 -7a1 1 0 0 0 -1.504 .864z" /><path d="M20 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" /></svg>                
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
