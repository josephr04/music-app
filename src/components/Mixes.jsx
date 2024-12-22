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
      <h1 className="text-white text-[1.44rem] p-4 ml-2 text-left font-semibold">Mixed for you</h1>
      <div className="px-6 flex overflow-x-auto whitespace-nowrap gap-4">
        {mixes.map((mix) => (
          <div key={mix.id} className="flex flex-col">
            <div
              className={`w-40 h-40 rounded-lg text-center font-semibold text-white shadow-md cursor-pointer transition-all ${
                mix.selected ? 'bg-white text-black' : 'bg-green-500 hover:bg-slate-700'
              }`}
            >
              <span className="flex items-center justify-center h-full">{mix.name}</span>
            </div>
            <h1 className="text-left mt-2 text-white text-sm font-medium"><span>{`${mix.name} - Name`}</span></h1>
            <h2 className="text-left text-slate-500 text-sm">Artist names</h2>
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
