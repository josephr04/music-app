import React, { useState, useEffect, useRef } from 'react';

export function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const options = [
    {
      name: 'Home',
      icon: (<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>)
    },
    {
      name: 'Albums',
      icon: (<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-disc"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M7 12a5 5 0 0 1 5 -5" /><path d="M12 17a5 5 0 0 0 5 -5" /></svg>)
    },
    {
      name: 'Artists',
      icon: (<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-microphone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" /><path d="M5 10a7 7 0 0 0 14 0" /><path d="M8 21l8 0" /><path d="M12 17l0 4" /></svg>)
    }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
        className="fixed inset-0 bg-black opacity-50 transition-opacity duration-500 z-1"
        onClick={toggleMenu}
        style={{ opacity: menuOpen ? 0.5 : 0 }}
      ></div>
      )}

      {/* Hamburger icon */}
      <button
        onClick={toggleMenu}
        className={`fixed top-4 left-4 z-2 p-2 rounded-md transition-all ${menuOpen ? 'z-1' : 'z-2'}`}
      >
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {/* Sidebar menu */}
      <div
        ref={menuRef}
        className={`fixed w-64 h-full bg-gray-900 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-2`}
      >
        {/* Menu top */}
        <div className='flex items-center p-4 mt-2'>
          {/* Close button */}
          <button onClick={toggleMenu} className="z-3">
            {/* X icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
          <h2 className="flex items-center text-xl font-bold ml-8">YMusic<svg xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-deezer ml-3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 16.5h2v.5h-2z" /><path d="M8 16.5h2.5v.5h-2.5z" /><path d="M16 17h-2.5v-.5h2.5z" /><path d="M21.5 17h-2.5v-.5h2.5z" /><path d="M21.5 13h-2.5v.5h2.5z" /><path d="M21.5 9.5h-2.5v.5h2.5z" /><path d="M21.5 6h-2.5v.5h2.5z" /><path d="M16 13h-2.5v.5h2.5z" /><path d="M8 13.5h2.5v-.5h-2.5z" /><path d="M8 9.5h2.5v.5h-2.5z" /></svg></h2>
        </div>

        {/* Sections */}
        <div className='flex flex-col justify-between h-5/6'>
          <ul className='p-2'>
            {options.map(({name, icon}) => (
              <li key={name} className="hover:bg-gray-600 rounded-lg cursor-pointer">
                <a href="#" className="ml-2 flex items-center p-3 rounded-lg font-semibold">
                  <span className="mr-5 text-xl flex items-center justify-center w-6 h-6">
                    {icon}
                  </span>
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
          <h2 className='text-xs text-center'>© 2024 Joseph Rosas. All rights reserved.</h2>
        </div>
      </div>
    </>
  );
}
