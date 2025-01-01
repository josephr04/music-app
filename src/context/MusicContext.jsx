import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { getMixes } from '@api/mixesApi';
import { getSongs } from '@api/songsApi';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [mixes, setMixes] = useState([]);
  const [songs, setSongs] = useState([]);
  const [selectedMix, setSelectedMix] = useState(null);
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
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
        });
        const newAudio = new Audio(cloudId + data[0].file);
        setAudio(newAudio);
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
  const playSong = useCallback((songFile, songTitle, songArtist, songImage) => {
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
  });

  // Function to play and pause song
  const playPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Function to play previous song
  const playPrevious = () => {
    if (!currentSong || songs.length === 0) return;
    const currentIndex = songs.findIndex(song => song.title === currentSong.title);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong({
      title: songs[previousIndex].title,
      artist: songs[previousIndex].artist,
      image: songs[previousIndex].image,
      file: songs[previousIndex].file
    });
  };

  // Function to play next song
  const playNext = () => {
    if (!currentSong || songs.length === 0) return;
    const currentIndex = songs.findIndex(song => song.title === currentSong.title);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong({
      title: songs[nextIndex].title,
      artist: songs[nextIndex].artist,
      image: songs[nextIndex].image,
      file: songs[nextIndex].file
    });
  };

  // Effect to play song whenever currentSong changes
  useEffect(() => {
    if (currentSong?.file) {
      playSong(currentSong.file, currentSong.title, currentSong.artist, currentSong.image);
    }
  }, [currentSong]);

  return (
    <MusicContext.Provider value={{
      mixes, songs, selectedMix, isPlaying, currentSong,
      cloudId, playSong, playPause, selectMix,
      getSongsByMix, setCurrentSong, playPrevious, playNext
    }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);
