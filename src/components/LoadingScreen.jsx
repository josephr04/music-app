import React from 'react';
import { waveform } from 'ldrs'

waveform.register()


export const LoadingScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-950 min-h-screen text-white p-4 ">
      <l-waveform size="50" stroke="5" speed="1" color="white"></l-waveform>
    <h1 className="text-2xl text-center font-bold mt-4">Loading Resources...</h1>
    </div>
  );
};