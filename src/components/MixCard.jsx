import { Link } from 'react-router-dom';
import { useMusic } from '@context/MusicContext';
import { getRandomItems } from '@utils/arrayUtils';
import { useMemo } from 'react';

export function MixCard() {
    const { mixes, getSongsByMix, cloudId } = useMusic();

    const randomMixes = useMemo(() => getRandomItems(mixes, 3), [mixes]);

    return (
        <div id="album-section" className='flex flex-col md:flex-row p-6 w-full space-y-10 md:space-y-0 md:space-x-7 md:justify-center'>
            {randomMixes.map((mix, index) => {
                const songs = useMemo(() => getRandomItems(getSongsByMix(mix.mix), 3), [mix]);
                const songsCount = getSongsByMix(mix.mix);
                const colors = ['bg-teal-800', 'bg-cyan-700', 'bg-fuchsia-800'];

                return (
                    <Link
                        key={mix.id}
                        to={`/playlist/${mix.id}`}
                        className={`flex flex-col w-full md:w-96 h-auto p-8 rounded-2xl ${colors[index % colors.length]}`}
                    >
                        <div className='flex items-center space-x-8 sm:space-x-2 text-wrap pb-3'>
                            <div
                                className='w-36 h-36 rounded-lg shadow-md flex-shrink-0'
                                style={{
                                    backgroundImage: `url(${cloudId + mix.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            ></div>
                            <div className='flex flex-col'>
                                <h1 className="text-center text-white text-2xl font-medium w-32 sm:w-28 overflow-hidden text-wrap text-ellipsis">
                                    {mix.name}
                                </h1>
                                <h2 className='text-center text-slate-300 text-normal font-medium'>{songsCount.length} {songsCount.length === 1 ? 'song' : 'songs'}</h2>
                            </div>
                        </div>
                        <div className='flex flex-col items-left pt-2 space-y-4'>
                            {songs.map((song) => (
                                <div key={song.id} className='flex space-x-6 items-center'>
                                    <div
                                        className='w-16 h-16 flex-shrink-0 rounded-lg shadow-md transition-all'
                                        style={{
                                            backgroundImage: `url(${cloudId + song.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    ></div>
                                    <div className='flex flex-col'>
                                        <h1 className="text-white text-base w-44 font-medium overflow-hidden whitespace-nowrap text-ellipsis">
                                            {song.title}
                                        </h1>
                                        <h2 className='text-slate-400 text-base w-44 overflow-hidden whitespace-nowrap text-ellipsis'>
                                            {song.artist}
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
