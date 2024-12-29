import React, { createContext, useContext, useEffect, useState } from 'react';
import { getMixes } from '@api/mixesApi';
import { getSongs } from '@api/songsApi';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [mixes, setMixes] = useState([]);
  const [songs, setSongs] = useState([]);
  const [selectedMix, setSelectedMix] = useState(null);
  const cloudId = "https://d3191cx8othwak.cloudfront.net/";

  // Mixes fetch
  useEffect(() => {
    const fetchMixes = async () => {
      const data = await getMixes();
      setMixes(data);
    }
    fetchMixes();
  }, []);

  // songs fetch
  useEffect(() => {
    const fetchSongs = async () => {
      const data = await getSongs();
      setSongs(data);
    };
    fetchSongs();
  }, []);

  // Select a mix by ID
  const selectMix = (mixId) => {
    const mix = mixes.find((mix) => mix.id === mixId);
    setSelectedMix(mix);
  };

  // Filter songs by ID
  const getSongsByMix = (mix) => {
    return songs.filter((song) => song.mix === mix);
  };

  return (
    <MusicContext.Provider value={{ mixes, selectedMix, selectMix, getSongsByMix,cloudId}}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);