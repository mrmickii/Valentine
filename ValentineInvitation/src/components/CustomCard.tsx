import { CardProps } from "../types/CardProps"

export const CustomCard: React.FC<CardProps> = ({ label, image, onClick}) => {
  return (
    <button className="flex flex-col justify-evenly items-center w-52 h-52 shadow-xl border" onClick={onClick}>
      <img className="rounded-full h-32 w-32 border-2" src={image} alt={image}/>
      <p className="text-sm text-red-400 font-semibold px-5">{label}</p>
    </button>
  )
}