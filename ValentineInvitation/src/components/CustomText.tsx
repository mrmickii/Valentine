import { TextDisplayProps } from "../types/TextProps";

export const CustomText: React.FC<TextDisplayProps> = ({label}) => {
  return(
    <div className={`text-2xl text-red-400 font-bold text-center`}>{label}</div>
  )
}