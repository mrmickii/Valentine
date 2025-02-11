import { TextDisplayProps } from "../types/TextProps";

export const CustomText: React.FC<TextDisplayProps> = ({ label }) => {
  return (
    <div
      className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center 
                 bg-gradient-to-r from-red-400 via-pink-400 to-rose-300 
                 text-transparent bg-clip-text 
                 drop-shadow-lg shadow-pink-300 
                 "
    >
      {label}
    </div>
  );
};
