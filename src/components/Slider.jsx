import { useState, useRef, useEffect } from 'react';

export function Slider({ value = 0, onChange, mode = 'full' }) {
  const [sliderValue, setSliderValue] = useState(value);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef();

  // Updates the value when it's changed outside (prop `value`)
  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  // handle changes
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
      {/* background bar */}
      <div
        className={`absolute w-full ${
          mode === 'mini' ? 'h-[2px]' : 'h-[4px]'
        } bg-slate-400 rounded-md`}
      ></div>

      {/* progress bar */}
      <div
        className={`absolute ${
          mode === 'mini' ? 'h-[2px]' : 'h-[4px]'
        } bg-white rounded-md`}
        style={{ width: `${sliderValue}%` }}
      ></div>

      {/* play button */}
      {(mode === 'full' || isDragging || isHovered) && (
        <div
          className={`absolute ${
            mode === 'mini' ? 'w-3 h-3' : 'w-4 h-4'
          } bg-white rounded-full shadow-md cursor-pointer`}
          style={{ left: `${sliderValue}%`, transform: 'translateX(-50%)' }}
        ></div>
      )}

      {/* Input Invisible */}
      <input
        ref={sliderRef}
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleChange}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="w-full h-1 opacity-0 cursor-pointer absolute"
      />
    </div>
  );
}
