import React, { useState, useEffect } from 'react';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
    <div>
      {/* Botón de menú hamburguesa (siempre visible, pero cubierto por el menú al abrirse) */}
      <button
        onClick={toggleMenu}
        className={`absolute top-4 left-4 z-50 p-2 rounded-md transition-all ${
          menuOpen ? 'z-40' : 'z-50'
        }`}
      >
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {/* Sidebar menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 p-4 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 left-4 z-50 p-2 rounded-m"
        >
          {/* X icon */}
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        </button>

        <h2 className="text-xl font-bold mb-4 ml-12 mt-1">YMusic</h2>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-blue-400">Home</a></li>
          <li className="mb-2"><a href="#" className="hover:text-blue-400">Albums</a></li>
          <li className="mb-2"><a href="#" className="hover:text-blue-400">Artists</a></li>
        </ul>
      </div>
    </div>
  );
}
