import react from 'react'

export default function QuickPicks() {
    const songs = Array.from({ length: 24 }, (_, i) => ({
        id: i + 1,
        name: `Song ${i + 1} - Sample Name`
    }));

    return (
        <>
            <h1 className="text-white text-[1.44rem] p-4 ml-2 text-left font-semibold">Quick Picks</h1>
            <div className='w-full px-6 mb-8 grid grid-flow-col grid-rows-4 overflow-x-auto whitespace-nowrap gap-4 gap-x-20'>
                {songs.map((song) => (
                    <div key={song.id} className="flex items-center w-64 cursor-pointer space-x-4 mr-6">
                        <div className="w-16 h-16 flex-shrink-0 rounded-lg bg-green-500 hover:bg-slate-700 shadow-md transition-all"></div>
                        <div className='flex flex-col'>
                            <h1 className="text-left text-white text-base font-medium w-44 overflow-hidden text-ellipsis">{song.name}</h1>
                            <h2 className="text-left text-slate-500 text-base w-44 overflow-hidden text-ellipsis">Artist name</h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}