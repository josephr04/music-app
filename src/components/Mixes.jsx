import React from 'react';
import { Link } from 'react-router-dom';

export function MixesSection() {
  const mixes = [
    { id: 1, name: 'Mix 1' },
    { id: 2, name: 'Mix 2' },
    { id: 3, name: 'Mix 3' },
    { id: 4, name: 'Mix 4' },
    { id: 5, name: 'Mix 5' },
  ];

  return (
    <>
      <div className="px-6 flex overflow-x-auto whitespace-nowrap gap-4">
        {mixes.map((mix) => (
            <Link key={mix.id} to={`/playlist/${encodeURIComponent(mix.name)}`} className="flex flex-col">
              <div
                className={`w-40 h-40 rounded-lg text-center font-semibold text-white shadow-md cursor-pointer transition-all ${
                  mix.selected ? 'bg-white text-black' : 'bg-green-500 hover:bg-slate-700'
                }`}
              >
                <span className="flex items-center justify-center h-full">{mix.name}</span>
              </div>
              <h1 className="text-left mt-2 text-white text-base font-medium"><span>{`${mix.name} - Name`}</span></h1>
              <h2 className="text-left text-slate-500 text-base">Artist names</h2>
            </Link>
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
