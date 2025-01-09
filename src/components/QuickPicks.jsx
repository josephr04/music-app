import { useMusic } from '@context/MusicContext';
import { useRef, useState } from 'react';

export function QuickPicks() {
    const { songs, cloudId, playSong, deskMenuOpen } = useMusic();
    const scrollContainerRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerScroll = 5;
    const maxScrollLimit = 3;

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
                <h1 className="text-white text-[1.44rem] p-4 ml-2 text-left font-semibold">Quick Picks</h1>
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
                className='w-full px-20 mb-8 grid grid-flow-col grid-rows-4 overflow-x-auto snap-x snap-mandatory scroll-smooth whitespace-nowrap gap-4 md:grid-rows-4 md:ml-4 md:gap-x-12 md:gap-y-0 md:h-96 md:px-8'
            >
                {songs.map((song, index) => (
                    <div
                        key={song.id}
                        onClick={() => playSong(song.file, song.title, song.artist, song.image)}
                        className={`snap-start flex items-center cursor-pointer space-x-4 mr-24 md:mr-0 md:p-2 sm:mr-12 ${!deskMenuOpen ? 'md:pr-44' : 'md:pr-28'} md:hover:bg-slate-800 md:rounded-md`}
                    >
                        <div
                            className="ml-7 w-16 h-16 flex-shrink-0 rounded-lg hover:bg-slate-700 shadow-md transition-all md:ml-2"
                            style={{
                                backgroundImage: `url(${cloudId + song.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        ></div>
                        <div className='flex flex-col w-36'>
                            <h1 className="text-left text-white text-base font-medium w-44 overflow-hidden text-ellipsis">{song.title}</h1>
                            <h2 className="text-left text-slate-500 text-base w-44 overflow-hidden text-ellipsis">{song.artist}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
