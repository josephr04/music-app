import React, { createContext, useContext, useEffect, useState } from 'react';
import { getMixes } from '@api/mixesApi';
import { getSongs } from '@api/songsApi';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [mixes, setMixes] = useState([]);
  const [songs, setSongs] = useState([]);
  const [selectedMix, setSelectedMix] = useState(null);
  const [audio, setAudio] = useState(null); // Estado para el objeto de audio
  const [isPlaying, setIsPlaying] = useState(false); // Estado para saber si está sonando
  const [currentSong, setCurrentSong] = useState(null); // Estado para la canción actual
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
      
      if (data.length > 0) {
        setCurrentSong({ 
          title: data[0].title, 
          artist: data[0].artist, 
          image: cloudId + data[0].image,
          file: cloudId + data[0].file
        });
      }
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

  // Function to play a song
  const playSong = (songFile, songTitle, songArtist, songImage) => {
    if (audio) {
      audio.pause();
    }

    const newSongImage = cloudId + songImage;
    const newAudio = new Audio(cloudId + songFile);
    setAudio(newAudio);
    setCurrentSong({ title: songTitle, artist: songArtist, image: newSongImage });
    newAudio.play();
    setIsPlaying(true);

    newAudio.onended = () => {
      setIsPlaying(false);
    };
  };

  // Function to play and pause song
  const playPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <MusicContext.Provider value={{
      mixes, songs, selectedMix, selectMix, getSongsByMix,
      playSong, playPause, isPlaying, currentSong,
      cloudId, setCurrentSong
    }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);
