import { useMusic } from '@context/MusicContext';

export function QuickPicks() {
    const { songs, cloudId, playSong } = useMusic();

    return (
        <>
            <h1 className="text-white text-[1.44rem] p-4 ml-2 text-left font-semibold">Quick Picks</h1>
            <div className='w-full px-20 mb-8 grid grid-flow-col grid-rows-4 overflow-x-auto snap-x snap-mandatory scroll-smooth whitespace-nowrap gap-4'>
                {songs.map((song) => (
                    <div key={song.id} onClick={() => playSong(song.file, song.title, song.artist, song.image)} className="snap-start flex items-center cursor-pointer space-x-4 mr-24">
                        <div className="ml-7 w-16 h-16 flex-shrink-0 rounded-lg hover:bg-slate-700 shadow-md transition-all"
                            style={{
                                backgroundImage: `url(${cloudId + song.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
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