import React, { useState, useEffect } from 'react';
import { MixesCarousel } from './MixesCarousel';
import allImage from '@assets/images/all.webp';
import energizeImage from '@assets/images/energize.webp';
import workoutImage from '@assets/images/workout.webp';
import focusImage from '@assets/images/focus.webp';
import chillImage from '@assets/images/chill.webp';

export function MusicHeader() {
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const musicGroups = [
    { id: 'all', name: 'All', image: allImage },
    { id: 'energize', name: 'Energize', image: energizeImage },
    { id: 'workout', name: 'Workout', image: workoutImage },
    { id: 'focus', name: 'Focus', image: focusImage },
    { id: 'chill', name: 'Chill', image: chillImage },
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
        <h1 className="text-white text-[1.44rem] p-4 ml-2 text-left font-semibold">Mixes</h1>
        <div className={`transition-opacity duration-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <MixesCarousel />
        </div>
      </div>
      <div className="mt-8">
      </div>
    </>
  );
}
