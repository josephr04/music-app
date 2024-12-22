import React from 'react'
import Menu from './components/Menu'
import PlayerBar from './components/PlayerBar'
import MusicHeader from './components/MusicHeader'
import QuickPicks from './components/QuickPicks'

function App() {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col text-white">
      <Menu />
      <MusicHeader />
      <QuickPicks />
      <h1 className="text-2xl font-bold mb-4 mt-4 text-center">🚧 Under construction 🚧</h1>
      <PlayerBar />
    </div>
  )
}

export default App
