import { CardProps } from "../types/CardProps";

export const CustomCard: React.FC<CardProps> = ({ label, image, onClick }) => {
  return (
    <button
      className="flex flex-col justify-evenly items-center w-44 h-52 
                 shadow-lg border border-pink-300 rounded-3xl 
                 bg-white hover:bg-pink-50 transition-all duration-300 opacity-80
                 hover:scale-105 hover:shadow-2xl"
      onClick={onClick}
    >
      <img
        className="rounded-full h-32 w-32 border-4 border-pink-400 shadow-md"
        src={image}
        alt={label}
      />
      <p className="text-sm text-rose-500 font-bold tracking-wide">{label}</p>
    </button>
  );
};
