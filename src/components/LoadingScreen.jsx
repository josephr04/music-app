import React from 'react';
import { waveform } from 'ldrs'

waveform.register()

export const LoadingScreen = () => {
  return (
    <div className="flex fixed justify-center flex-col items-center bg-slate-950 w-[100%] h-[100%] text-white p-4 z-10 loadingSection">
      <div className='flex flex-col justify-center items-center'>
        <l-waveform size="50" stroke="5" speed="1" color="white"></l-waveform>
        <h1 className="text-2xl text-center font-bold mt-4">Loading Resources...</h1>
      </div>
        <h2 className='absolute text-xs text-center bottom-20'>Copyright © Joseph Rosas</h2>
    </div>
  );
};