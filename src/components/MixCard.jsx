import { Link } from 'react-router-dom';

export function MixCard() {
    const mixes = Array.from({ length: 3 }, (_, i) => ({
        id: i + 1,
        name: `mix ${i + 1} - Sample Name`
    }));

    const songs = Array.from({ length: 3 }, (_, i) => ({
        id: i + 1,
        name: `Song ${i + 1} - Sample Name`,
        artist: `Artist ${i + 1}`
    }));

    const colors = ['bg-teal-800', 'bg-cyan-700', 'bg-fuchsia-800',];

    return (
        <div className='flex flex-col p-6 w-full space-y-10'>
            {mixes.map((mix, index) => (
                <Link key={mix.id} to={`/playlist/${encodeURIComponent(mix.name)}`} className={`flex flex-col w-full h-auto p-8 rounded-2xl ${colors[index % colors.length]}`}>
                    <div className='flex items-center space-x-8 text-wrap pb-3'>
                        <div className='w-36 h-36 rounded-lg bg-green-500 shadow-md flex-shrink-0'></div>
                        <div className='flex flex-col'>
                            <h1 className="text-center text-white text-2xl font-medium w-32overflow-hidden text-ellipsis">{mix.name}</h1>
                            <h2 className='text-center text-slate-800 text-normal'>4 songs</h2>
                        </div>
                    </div>
                    <div className='flex flex-col items-left pt-2 space-y-4'>
                        {songs.map((song) =>(
                            <div key={song.id} className='flex space-x-6 items-center'>
                                <div className='w-16 h-16 flex-shrink-0 rounded-lg bg-green-500 hover:bg-slate-700 shadow-md transition-all'></div>
                                <div className='flex flex-col'>
                                    <h1 className="text-white text-base font-medium overflow-hidden text-ellipsis">{song.name}</h1>
                                    <h2 className='text-slate-800 text-base overflow-hidden text-ellipsis'>{song.artist}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </Link>
            ))}
        </div>
    );
}