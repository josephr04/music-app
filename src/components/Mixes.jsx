import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useMusic } from '@context/MusicContext';

export function MixesSection() {
  const { mixes, cloudId } = useMusic();
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
        {sortedMixes.map((mix) => (
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
              <h1 className="text-left mt-2 text-white text-base font-medium"><span>{`${mix.name}`}</span></h1>
              <h2 className="text-left text-slate-500 text-base">Artist names</h2>
            </Link>
        ))}
      </div>
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </>
  );
}
