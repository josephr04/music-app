import React from 'react';

export default function MixesSection() {
  const mixes = [
    { id: 1, name: 'Mix 1' },
    { id: 2, name: 'Mix 2' },
    { id: 3, name: 'Mix 3' },
    { id: 4, name: 'Mix 4' },
    { id: 5, name: 'Mix 5' },
  ];

  return (
    <>
      <div className="px-4 flex overflow-x-auto whitespace-nowrap">
        {mixes.map((mix) => (
          <div
            key={mix.id}
            className={`mx-2 px-16 py-16 rounded-xl text-center font-semibold text-white shadow-md cursor-pointer transition-all ${
              mix.selected ? 'bg-white text-black' : 'bg-slate-900 hover:bg-slate-700'
            }`}
          >
            {mix.name}
          </div>
        ))}
      </div>
        <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </>
  );
}
