import { CustomButton } from "../components/CustomButton";
import { CustomText } from "../components/CustomText";
import BgCutie from "../assets/others/peach-cat.gif";
import { useNavigate } from "react-router-dom";

export const App = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="flex flex-col items-center max-w-xs p-4 text-center bg-white bg-opacity-80 rounded-lg shadow-md shadow-red-500">
        <CustomText label="Babe, would you like to be my date this coming Feb 14, 2025?" />
        <div className="flex flex-col justify-center gap-4 w-full mt-4">
            <CustomButton label="(˶˃ ᵕ ˂˶) YEEEEEEEESSSSSS" onClick={() => navigate("/accepted")} />
            <CustomButton label="(◞‸ ◟) NO" onClick={() => navigate("/rejected")} />
        </div>
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
  );
};
