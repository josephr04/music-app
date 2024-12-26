import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function NotFound() {
    const { mixId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center bg-slate-950 min-h-screen text-white p-4 ">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="200"  height="200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mood-sad"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 10l.01 0" /><path d="M15 10l.01 0" /><path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" /></svg>            <h1 className="text-6xl text-center font-bold">404</h1>
            <h1 className="text-2xl text-center font-bold">Page not found</h1>
            <button className='flex bg-sky-400 rounded-md mt-4 py-1 px-4'>
                Go Home
            </button>
      </div>
    );
}