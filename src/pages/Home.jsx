import React from 'react'
import Menu from '/src/components/Menu'
import PlayerBar from '/src/components/PlayerBar'
import MusicHeader from '/src/components/MusicHeader'
import QuickPicks from '/src/components/QuickPicks'
import MixCard from '/src/components/MixCard'
import Artist from '/src/components/Artists'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <Menu />
      <MusicHeader />
      <QuickPicks />
      <MixCard />
      <Artist />
      <h1 className="text-2xl font-bold mb-24 mt-8 text-center">🚧 Under construction 🚧</h1>
    </div>
  );
}