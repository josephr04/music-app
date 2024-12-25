import { useState, useRef, useEffect } from 'react'

export function Slider({ percentage = 0, onChange }) {
  const [position, setPosition] = useState(percentage)
  const [marginLeft, setMarginLeft] = useState(0)
  const [progressBarWidth, setProgressBarWidth] = useState(0)

  const rangeRef = useRef()
  const thumbRef = useRef()

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width
    const thumbWidth = thumbRef.current.getBoundingClientRect().width
    const centerThumb = (thumbWidth / 100) * position * -1
    const centerProgressBar =
      thumbWidth + (rangeWidth / 100) * position - (thumbWidth / 100) * position
    setMarginLeft(centerThumb)
    setProgressBarWidth(centerProgressBar)
  }, [position])

  const handleChange = (e) => {
    const value = parseFloat(e.target.value)
    setPosition(value)
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <div className="relative w-full">
      {/* Background Bar */}
      <div className="absolute top-1/2 left-1/2 w-[99%] h-[3px] bg-slate-400 rounded-md transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      {/* Progress Bar */}
      <div
        className="absolute top-1/2 bg-white h-[4px] rounded-md transform -translate-y-1/2 pointer-events-none"
        style={{
          width: `${progressBarWidth}px`
        }}
      ></div>
      
      {/* Thumb */}
      <div
        ref={thumbRef}
        className="absolute top-1/2 w-4 h-4 bg-white rounded-full shadow-md transform -translate-y-1/2"
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`
        }}
      ></div>

      {/* Range Input */}
      <input
        type="range"
        value={position}
        ref={rangeRef}
        step="0.01"
        min="0"
        max="100"
        className="w-full h-2 opacity-0 cursor-pointer"
        onChange={handleChange}
      />
    </div>
  )
}