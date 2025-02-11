import { CustomText } from "../components/CustomText";
import { CustomButton } from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import BgCutie from '../assets/others/peach-goma-peach.gif'
import { useState } from "react";

export const Accepted = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState<string>("");

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="flex flex-col gap-8 items-center">
        <CustomText label="What time are you free?" />
        <input 
          className="text-sm border text-center w-28 border-red-400 text-red-400 font-semibold"
          type="time" 
          onChange={(e) => setTime(e.target.value)} 
        />
        <CustomButton 
          label="(˶˃ ᵕ ˂˶) CLICK HERE" 
          onClick={() => {
            if (!time) {
              alert("Please select a time before proceeding!");
              return;
            }
            navigate("/food-selection", { state: { time } });
          }} 
        /> 
      </div>

      <div 
        className="w-80 h-80"
        style={{
            backgroundImage: `url(${BgCutie})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}
      > 
      </div>
    </div>
  )
}