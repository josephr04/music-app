import React from 'react';
import { AppRoutes } from './routes';
import { MusicProvider } from '@context/MusicContext';

export function App() {
  return (
    <MusicProvider>
      <AppRoutes />
    </MusicProvider>
  );
}
