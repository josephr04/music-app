
export function Artist() {

    const artists = [
        { id: 1, name: "Alan Walker", image: "src/assets/images/artists/alan-walker.webp"},
        { id: 2, name: "The Weeknd", image: "src/assets/images/artists/the-weeknd.webp" },
        { id: 3, name: "Mitski", image: "src/assets/images/artists/mitski.webp" },
        { id: 4, name: "Inabakumori", image: "src/assets/images/artists/inabakumori.webp" }
      ];

    return (
        <div id="artist-section">
            <h1 className="text-white text-[1.44rem] p-4 ml-2 text-left font-semibold">Artists</h1>
            <div className="px-6 flex overflow-x-auto whitespace-nowrap gap-4">
                {artists.map((artist) => (
                <div key={artist.id} className="flex flex-col">
                    <div
                        className={`w-40 h-40 rounded-full text-center font-semibold text-white shadow-md cursor-pointer transition-all ${
                            artist.selected ? 'bg-white text-black' : ' hover:bg-slate-700'
                        }`}
                        style={{
                            backgroundImage: `url(${artist.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                    </div>
                    <h1 className="text-center mt-2 text-white text-base font-medium"><span>{`${artist.name}`}</span></h1>
                </div>
                ))}
            </div>
        </div>
    );
}