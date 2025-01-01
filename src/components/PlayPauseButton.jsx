import React from 'react';
import { useMusic } from '@context/MusicContext';

export function PlayPauseButton({ expanded, fill, iconSize = 36 }) {
  const { isPlaying, playPause } = useMusic();

  return (
    <div
      onClick={playPause}
      className={`flex items-center justify-center ${ expanded ? 'bg-white': 'hover:bg-slate-800'} rounded-full cursor-pointer w-12 h-12`}
    >
      {isPlaying ? (
        <svg  xmlns="http://www.w3.org/2000/svg"  width={iconSize}  height={iconSize}  viewBox="0 0 24 24"  fill={fill}  className="icon icon-tabler icons-tabler-filled icon-tabler-player-pause"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /></svg>
      ) : (
        <svg  xmlns="http://www.w3.org/2000/svg"  width={iconSize}  height={iconSize}  viewBox="0 0 24 24"  fill={fill}  className="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
      )}
    </div>
  );
}
