import React, { useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useMusic } from '@context/MusicContext';

export function MixesSection() {
  const { mixes, cloudId, getSongsByMix } = useMusic();
  const { pathname } = useLocation();
  const scrollContainerRef = useRef(null);

  const sortedMixes = [...mixes].sort((a, b) => a.id - b.id);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [pathname]);

  return (
    <>
      <div 
        ref={scrollContainerRef}
        className="px-6 flex overflow-x-auto whitespace-nowrap gap-4"
      >
        {sortedMixes.map((mix) => {
          const songs = getSongsByMix(mix.mix) || [];
          const artistNames = [...new Set(songs.map((song) => song.artist))].join(', ');

          return (
            <Link key={mix.id} to={`/playlist/${mix.id}`} className="flex flex-col">
              <div
                className={`w-40 h-40 rounded-lg text-center font-semibold text-white shadow-md cursor-pointer transition-all ${
                  mix.selected ? 'bg-white' : 'hover:bg-slate-700'
                }`}
                style={{
                  backgroundImage: `url(${cloudId + mix.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
              </div>
              <h1 className="text-left mt-2 text-white text-base font-medium">
                <span>{`${mix.name}`}</span>
              </h1>
              <h2 className="text-left text-slate-500 text-sm max-w-[160px] line-clamp-2 overflow-hidden">
                {artistNames || 'No artists available'}
              </h2>
            </Link>
          );
        })}
      </div>
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }

          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
          }
        `}
      </style>
    </>
  );
}
