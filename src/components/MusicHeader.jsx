import React, { useState } from 'react';
import { MixesSection } from './Mixes';

export function MusicHeader() {
  const [selectedGroup, setSelectedGroup] = useState('all');

  const musicGroups = [
    { id: 'all', name: 'All', image: 'src/assets/images/all.webp' },
    { id: 'energize', name: 'Energize', image: 'src/assets/images/energize.webp' },
    { id: 'workout', name: 'Workout', image: 'src/assets/images/workout.webp' },
    { id: 'focus', name: 'Focus', image: 'src/assets/images/focus.webp' },
    { id: 'chill', name: 'Chill', image: 'src/assets/images/chill.webp' },
  ];
  
  const handleGroupChange = (groupId) => {
    setSelectedGroup(groupId);
  };

  const currentGroup = musicGroups.find(group => group.id === selectedGroup);

  return (
    <>
      {/* Section background */}
      <div className="h-83 bg-cover bg-center flex flex-col" style={{ backgroundImage: `url(${currentGroup.image})` }}>
        <h1 className="text-white text-3xl p-4 text-right">{currentGroup.name}</h1>
        {/* Section buttons */}
        <div className="px-4 mt-6 mb-2 overflow-auto whitespace-nowrap">
          {musicGroups.map(group => (
            <button
              key={group.id}
              onClick={() => handleGroupChange(group.id)}
              className={`mx-2 p-2 px-5 rounded-3xl font-semibold min-w-16 ${selectedGroup === group.id ? 'bg-white text-black' : 'bg-slate-900 hover:bg-slate-600'}`}
            >
              {group.name}
            </button>
          ))}
        </div>
        <h1 className="text-white text-[1.44rem] p-4 ml-2 text-left font-semibold">Mixed for you</h1>
        <MixesSection />
      </div>
      <div className="mt-8">
      </div>
    </>
  );
}
