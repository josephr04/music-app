
export function Artist() {

    const artists = Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        name: `Artist ${i + 1}`
    }));

    return (
        <>
            <h1 className="text-white text-[1.44rem] p-4 ml-2 text-left font-semibold">Artists</h1>
            <div className="px-6 flex overflow-x-auto whitespace-nowrap gap-4">
                {artists.map((artist) => (
                <div key={artist.id} className="flex flex-col">
                    <div
                        className={`w-40 h-40 rounded-full text-center font-semibold text-white shadow-md cursor-pointer transition-all ${
                            artist.selected ? 'bg-white text-black' : 'bg-green-500 hover:bg-slate-700'
                        }`}
                    >
                        <span className="flex items-center justify-center h-full">{artist.name}</span>
                    </div>
                    <h1 className="text-center mt-2 text-white text-base font-medium"><span>{`${artist.name} - Name`}</span></h1>
                </div>
                ))}
            </div>
        </>
    );
}