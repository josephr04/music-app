import React from 'react'
import Menu from './components/Menu'
import PlayerBar from './components/PlayerBar'
import MusicHeader from './components/MusicHeader'

function App() {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col text-white">
      <Menu />
      <MusicHeader />
      <h1 className="text-4xl font-bold mb-4">Music App 🎶</h1>
      <button className="mt-4 px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600 transition">
        Explore
      </button>
      <PlayerBar />
    </div>
  )
}

export default App
