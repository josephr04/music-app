import React, { useState, useEffect } from 'react';
import { Slider } from '@components/Slider'
import { PlayPauseButton } from '@components/PlayPauseButton';

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
        expanded ? 'h-screen' : 'h-20'
      }`}
    >

      <div
        className="flex items-center justify-between"
        onClick={!expanded ? togglePlayerBar : undefined}
      >
        {!expanded ? (
          <>
            {/* Mini Player */}
            <div className="w-full flex flex-col justify-center">
              <div className="w-full">
                <Slider 
                  value={50} 
                  onChange={(val) => console.log('Slider Value:', val)}
                  mode="mini"
                />
              </div>
              <div className='flex space-x-20 items-center justify-center mt-4'>
                <div onClick={togglePlayerBar} className='flex space-x-6'>
                  <div className="w-12 h-12 flex-shrink-0 rounded-md bg-green-500 hover:bg-slate-700 shadow-md transition-all"></div>
                  <div className='flex flex-col'>
                      <h1 className="text-left text-white text-base font-medium w-44 overflow-hidden text-ellipsis">Song Name</h1>
                      <h2 className="text-left text-slate-500 text-base w-44 overflow-hidden text-ellipsis">Artist name</h2>
                  </div>
                </div>
                <div>
                  <PlayPauseButton isPlaying={isPlaying} expanded={expanded} fill="white" iconSize={24} 
                    onToggle={(e) => {
                      e.stopPropagation();
                      togglePlayPause();
                    }}
                  />
                </div>
              </div>
            </div>
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
                <Slider 
                  value={50}
                  onChange={(val) => console.log('Slider Value:', val)}
                  mode='full'
                />
              </div>
              {/* Control panel*/}
              <div className="flex items-center space-x-4 mt-12">
                {/* Back button */}
                <div className='flex items-center justify-center w-14 h-14 hover:bg-slate-800 rounded-full'>
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-player-skip-back"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z" /><path d="M4 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" /></svg>
                </div>
                {/* play/pause button */}
                <div onClick={togglePlayPause} className='flex items-center justify-center w-20 h-20 bg-white rounded-full'>
                  <PlayPauseButton isPlaying={isPlaying} onToggle={togglePlayPause} expanded={expanded} fill="black" iconSize={36} />
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
