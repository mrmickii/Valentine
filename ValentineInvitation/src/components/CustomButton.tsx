import { ButtonProps } from "../types/ButtonProps"

export const CustomButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="bg-red-400 text-white text-sm px-6 py-2 rounded-md font-semibold">{label}</button>
  )
}