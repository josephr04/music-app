import React, { useRef, useState } from 'react';
import { useMusic } from '@context/MusicContext';

export function SongsCarousel() {
    const { songs, cloudId, playSong } = useMusic();
    const scrollContainerRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerScroll = 5;
    const maxScrollLimit = 4;

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const itemWidth = container.scrollWidth / songs.length;
            let newIndex = currentIndex;

            if (direction === 'left') {
                newIndex = Math.max(currentIndex - itemsPerScroll, 0);
            } else if (direction === 'right') {
                newIndex = Math.min(currentIndex + itemsPerScroll, maxScrollLimit * itemsPerScroll);
            }

            setCurrentIndex(newIndex);

            container.scrollTo({
                left: newIndex * itemWidth,
                behavior: 'smooth',
            });
        }
    };

  return (
    <>
        <div className='flex items-center'>
            <h1 className="text-white text-[1.44rem] p-4 ml-4 text-left font-semibold">All Songs</h1>
            <div className='hidden md:flex ml-auto mr-8 space-x-4'>
                <div
                    onClick={() => scroll('left')}
                    className={`p-1 rounded-full border-2 border-slate-600 ${currentIndex === 0 ? 'opacity-50 cursor-default' : 'hover:bg-slate-800 cursor-pointer'}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 6l-6 6l6 6" />
                    </svg>
                </div>
                <div
                    onClick={() => scroll('right')}
                    className={`p-1 rounded-full border-2 border-slate-600 ${currentIndex >= maxScrollLimit * itemsPerScroll ? 'opacity-50 cursor-default' : 'hover:bg-slate-800 cursor-pointer'}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 6l6 6l-6 6" />
                    </svg>
                </div>
            </div>
        </div>
        <div 
            ref={scrollContainerRef}
            className="mx-2 px-6 flex overflow-x-auto whitespace-nowrap gap-4"
        >
            {songs.map((song) => {
            return (
                <div key={song.id} onClick={() => playSong(song.file, song.title, song.artist, song.image)} className="flex flex-col">
                <div
                    className={`w-40 h-40 rounded-lg text-center font-semibold text-white shadow-md cursor-pointer transition-all ${
                    song.selected ? 'bg-white' : 'hover:bg-slate-700'
                    }`}
                    style={{
                    backgroundImage: `url(${cloudId + song.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                    }}
                >
                </div>
                <h1 className="text-left mt-2 text-white text-base font-medium overflow-hidden text-wrap text-ellipsis">
                    <span>{`${song.title}`}</span>
                </h1>
                <h2 className="text-left text-slate-500 text-sm max-w-[160px] line-clamp-2 overflow-hidden">
                    {song.artist}
                </h2>
                </div>
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
