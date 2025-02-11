import { useState } from "react";
import { SliderProps } from "../types/SliderProps";

export const CustomSlider: React.FC<SliderProps> = ({min = 0, max = 100, step = 1, defaultValue = 50, onChange}) => {
  const [value, setValue] = useState<number>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md p-4">
      <div className="text-lg font-semibold text-red-400">{value}</div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full cursor-pointer appearance-none h-2 bg-gray-300 rounded-lg outline-none transition-all"
        style={{
          background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${(value - min) / (max - min) * 100}%, #d1d5db ${(value - min) / (max - min) * 100}%, #d1d5db 100%)`
        }}
      />

      <div className="flex justify-between w-full text-xs text-gray-500 mt-2">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};