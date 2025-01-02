import { useState, useRef, useEffect } from 'react';

export function Slider({ value = 0, onChange, mode = 'full', max = 100 }) {
  const [sliderValue, setSliderValue] = useState(value);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef();

  // Updates the value when it's changed outside (prop `value`)
  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  // handle changes when the slider is adjusted
  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setSliderValue(newValue);
    if (onChange) onChange(newValue);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-full flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Background bar */}
      <div
        className={`absolute w-full ${mode === 'mini' ? 'h-[2px]' : 'h-[2px]'} bg-slate-400 rounded-md`}
      ></div>

      {/* Progress bar */}
      <div
        className={`absolute ${mode === 'mini' ? 'h-[2px]' : 'h-[2px]'} bg-white rounded-md`}
        style={{ width: `${(sliderValue / max) * 100}%` }}
      ></div>

      {/* Play button */}
      {(mode === 'full' || isDragging || isHovered) && (
        <div
          className={`absolute ${mode === 'mini' ? 'w-3 h-3' : 'w-3 h-3'} bg-white rounded-full shadow-md cursor-pointer`}
          style={{ left: `${(sliderValue / max) * 100}%`, transform: 'translateX(-50%)' }}
        ></div>
      )}

      {/* Invisible Input */}
      <input
        ref={sliderRef}
        type="range"
        min="0"
        max={max}
        value={sliderValue}
        onChange={handleChange}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="w-full h-1 opacity-0 cursor-pointer absolute"
      />
    </div>
  );
}
