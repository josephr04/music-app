import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MixesSection } from '@components/Mixes'
import { useMusic } from '@context/MusicContext';

export function MixPage({mix}) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { cloudId, getSongsByMix } = useMusic();
    const [songs, setSongs] = useState([]);
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        if (mix) {
            setSongs(getSongsByMix(mix.mix));
        }
    }, [mix]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-950  text-white">
            <div
                className={`fixed top-0 left-0 right-0 z-3 h-20 flex items-center px-4 bg-green-300 shadow-md 
                transition-all duration-200 ease-in-out ${
                    showHeader ? 'opacity-100 transition-opacity' : 'opacity-0 transition-opacity'
                }`}
            >
                <h1
                    className={`ml-16 mr-auto mt-6 text-xl font-bold transition-opacity duration-300 ease-in-out ${
                        showHeader ? 'opacity-100 delay-100' : 'opacity-0'
                    }`}
                >
                    {mix.name}
                </h1>       
            </div>
            <div className="fixed pt-6">
                {/* Arrow button */}
                <button onClick={handleBack} className="z-3 p-4">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>
                </button>
            </div>
            <div className="w-56 h-56 mt-20 ml-auto mr-auto rounded-lg text-center font-semibold text-white shadow-md hover:bg-slate-700 cursor-pointer transition-all"
                style={{
                    backgroundImage: `url(${cloudId + mix.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
            </div>
            <h1 className="ml-auto mr-auto mt-6 text-3xl font-bold">{mix.name}</h1>
            <h2 className="ml-auto mr-auto mt-2 text-base font-base text-slate-400">5 songs</h2>
            <div className='flex ml-auto mr-auto mt-4'>
                <div className='flex items-center justify-center w-16 h-16 bg-green-400 rounded-full'>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
                </div>
            </div>
            <div className='flex flex-col ml-7 mr-auto mt-8 space-y-5'>
                {songs.map((song) =>(
                    <div key={song.id} className='flex space-x-6 items-center'>
                        <div className='w-16 h-16 flex-shrink-0 rounded-lg hover:bg-slate-700 shadow-md transition-all'
                            style={{
                                backgroundImage: `url(${cloudId + song.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                        </div>
                        <div className='flex flex-col'>
                            <h1 className="text-white text-base font-medium overflow-hidden text-ellipsis">{song.title}</h1>
                            <h2 className='text-slate-400 text-base overflow-hidden text-ellipsis'>{song.artist}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-8 mb-24 ml-1'>
                <h1 className="text-white text-[1.44rem] p-4 ml-2 text-left font-semibold">Related playlists</h1>
                <MixesSection />
            </div>
        </div>
    );
}