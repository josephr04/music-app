import React from 'react'
import Menu from './components/Menu'

function App() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
      <Menu />
      <h1 className="text-4xl font-bold mb-4">Music App 🎶</h1>
      <button className="mt-4 px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600 transition">
        Explore
      </button>
    </div>
  )
}

export default App
