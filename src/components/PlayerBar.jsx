import React, { useState, useEffect } from 'react';
import { Slider } from '@components/Slider'
import { useMusic } from '@context/MusicContext';
import { PlayPauseButton } from '@components/PlayPauseButton';
import { VolumeButton } from '@components/VolumeButton';

export function PlayerBar() {
  const [expanded, setExpanded] = useState(false);
  const { currentSong, playNext, playPrevious, currentTime, duration, seekToTime } = useMusic();

  const togglePlayerBar = () => {
    setExpanded(!expanded);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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
      >
        {!expanded ? (
          <>
            {/* Mini Player */}
            <div className="w-full flex flex-col justify-center">
              <div className="w-full">
                <Slider
                  value={(currentTime / duration) * 100} 
                  max={100}
                  onChange={(val) => {
                    const newTime = (val / 100) * duration;
                    seekToTime(newTime);
                  }}
                  mode="mini"
                />
              </div>
              <div className='flex space-x-8 md:space-x-0 items-center justify-center md:justify-between mt-4 md:mx-4'>
                <div onClick={togglePlayerBar} className='flex space-x-6 pr-12 md:pr-0 sm:ml-10 sm:pr-4'>
                  <div className="w-12 h-12 flex-shrink-0 rounded-md shadow-md transition-all cursor-pointer"
                    style={{
                      backgroundImage: `url(${currentSong.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                  </div>
                  <div className='flex flex-col cursor-pointer w-44'>
                      <h1 className="text-left text-white text-base font-medium w-44 md:w-56 overflow-hidden whitespace-nowrap text-ellipsis">{currentSong.title}</h1>
                      <h2 className="text-left text-slate-500 text-base w-44 md:w-56 overflow-hidden whitespace-nowrap text-ellipsis">{currentSong.artist}</h2>
                  </div>
                </div>
                <div className='md:flex md:space-x-4 md:pr-[2%]'>
                  {/* Previous button */}
                  <div onClick={playPrevious} className='hidden md:flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="icon icon-tabler icons-tabler-filled icon-tabler-player-skip-back cursor-pointer"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z" /><path d="M4 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" /></svg>
                  </div>
                  {/* play/pause button */}
                  <div className='sm:mr-8'>
                    <PlayPauseButton expanded={expanded} fill="white" iconSize={24} 
                      onToggle={(e) => {
                        e.stopPropagation();
                      }}
                    />
                  </div>
                  {/* Next button */}
                  <div onClick={playNext} className='hidden md:flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="icon icon-tabler icons-tabler-filled icon-tabler-player-skip-forward cursor-pointer"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5v14a1 1 0 0 0 1.504 .864l12 -7a1 1 0 0 0 0 -1.728l-12 -7a1 1 0 0 0 -1.504 .864z" /><path d="M20 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" /></svg>                
                  </div>
                </div>
                <div className='hidden md:flex md:items-center md:space-x-8'>
                  {/* Volume Button */}
                  <div >
                    <VolumeButton />
                  </div>
                  {/* Expand button */}
                  <div onClick={togglePlayerBar}>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#bdb8b7"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-maximize cursor-pointer hover:stroke-white"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 4l4 0l0 4" /><path d="M14 10l6 -6" /><path d="M8 20l-4 0l0 -4" /><path d="M4 20l6 -6" /><path d="M16 20l4 0l0 -4" /><path d="M14 14l6 6" /><path d="M8 4l-4 0l0 4" /><path d="M4 4l6 6" /></svg>
                  </div>
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
                className="absolute md:hidden top-8 sm:top-12 left-4 text-white text-2xl rounded-full p-2 hover:bg-gray-600 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
              </button>
              <div className="w-80 h-80 mt-28 sm:w-72 sm:h-72 bg-gray-700 rounded-lg shadow-md flex items-center justify-center"
                style={{
                  backgroundImage: `url(${currentSong.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} 
              >
              </div>
              <div className='w-80 flex flex-col mt-8 sm:ml-8 sm:mt-6' >
                <h1 className="text-2xl font-bold overflow-hidden text-ellipsis">{currentSong.title}</h1>
                <h1 className="text-lg text-slate-400 overflow-hidden text-ellipsis">{currentSong.artist}</h1>
              </div>
              <div className="w-[78%]	h-2 mt-4 sm:w-[80%]">
                <Slider 
                  value={(currentTime / duration) * 100} 
                  max={100}
                  onChange={(val) => {
                    const newTime = (val / 100) * duration;
                    seekToTime(newTime);
                  }}
                  mode='full'
                />
              </div>
              <div className="flex items-center justify-between w-[78%] sm:w-[80%]">
                <span className="text-[15px] text-slate-400">{formatTime(currentTime)}</span>
                <span className="text-[15px] text-slate-400">{formatTime(duration)}</span>
              </div>
              {/* Control panel*/}
              <div className="flex items-center space-x-4 mt-4">
                {/* Previous button */}
                <div onClick={playPrevious} className='flex items-center justify-center w-14 h-14 active:bg-slate-800 rounded-full cursor-pointer md:hover:bg-slate-800'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-player-skip-back"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z" /><path d="M4 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" /></svg>
                </div>
                {/* play/pause button */}
                <div className='flex items-center justify-center w-20 h-20 bg-white rounded-full cursor-pointer'>
                  <PlayPauseButton expanded={expanded} fill="black" iconSize={36} onToggle={(e) => e.stopPropagation()} />
                </div>
                {/* Next button */}
                <div onClick={playNext} className='flex items-center justify-center w-14 h-14 active:bg-slate-800 rounded-full cursor-pointer md:hover:bg-slate-800'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-player-skip-forward"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5v14a1 1 0 0 0 1.504 .864l12 -7a1 1 0 0 0 0 -1.728l-12 -7a1 1 0 0 0 -1.504 .864z" /><path d="M20 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" /></svg>                
                </div>
              </div>
              <div className='hidden md:flex md:ml-auto md:mr-8 md:mt-4 md:space-x-8'>
                <VolumeButton />
                <div className='' onClick={togglePlayerBar}>
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#bdb8b7"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-diagonal-minimize-2 cursor-pointer hover:stroke-white"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 10h-4v-4" /><path d="M20 4l-6 6" /><path d="M6 14h4v4" /><path d="M10 14l-6 6" /></svg>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
