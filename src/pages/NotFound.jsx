import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function NotFound() {
    const { mixId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-slate-950 min-h-screen text-white p-4">
            <h1 className="text-3xl font-bold">Not Found</h1>
      </div>
    );
}