import { useState } from "react";
import { SliderProps } from "../types/SliderProps";

export const CustomSlider: React.FC<SliderProps> = ({ min = 0, max = 100, step = 1, defaultValue = 50, onChange }) => {
  const [value, setValue] = useState<number>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md p-4">
      <div className="text-xl font-bold text-pink-500 bg-pink-100 px-4 py-1 rounded-full shadow-md">
        {value} 💕
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full cursor-pointer appearance-none h-2 bg-gray-300 rounded-full outline-none transition-all"
        style={{
          background: `linear-gradient(to right, #f472b6 0%, #f472b6 ${(value - min) / (max - min) * 100}%, #e5e7eb ${(value - min) / (max - min) * 100}%, #e5e7eb 100%)`,
        }}
      />
      <div className="flex justify-between w-full text-xs text-gray-500 mt-2">
        <span className="text-pink-500">{min} 😐</span>
        <span className="text-red-400">{max} 🥰</span>
      </div>
    </div>
  );
};
