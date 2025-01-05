import React from 'react';
import { Menu } from '@components/Menu';
import { MusicHeader } from '@components/MusicHeader';
import { QuickPicks } from '@components/QuickPicks';
import { MixCard } from '@components/MixCard';
import { Artist } from '@components/Artists';
import { useMusic } from '@context/MusicContext';
import { SongsCarousel } from '@components/SongsCarousel';

export function Home() {
    const { deskMenuOpen } = useMusic();

  return (
    <div id="home-section" className="min-h-screen flex text-white">
      <Menu />
      <div className={`md:sticky md:overflow-y-auto md:mb-[88px] md:h-[87%] md:m-2 ${ deskMenuOpen ? "md:ml-[7px] md:w-[80.9%]" : "md:ml-[5px] md:w-[93.65%]"} md:bg-slate-900 md:rounded-md scroll-smooth flex-1 flex flex-col mx-auto`}>
        <MusicHeader />
        <QuickPicks />
        <MixCard />
        <div className='hidden md:block'>
          <SongsCarousel />
        </div>
        <Artist />
      </div>
    </div>
  );
}
