import React, { useState, useEffect } from 'react';
import { AppRoutes } from './routes';
import { MusicProvider } from '@context/MusicContext';
import { LoadingScreen } from '@components/LoadingScreen';

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <MusicProvider>
      {loading ? <div className='overflow-hidden'><LoadingScreen /></div> : <AppRoutes />}
    </MusicProvider>
  );
}
