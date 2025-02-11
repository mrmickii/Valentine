import { useLocation } from "react-router-dom"
import { CustomText } from "../components/CustomText";
import SeeYouBubu from "../assets/others/see-you-bubu.gif"

export const SeeYou = () => {
  const location = useLocation();
  const {selectedFood, selectedMovie, selectedTime} = location.state || {};

  const convertToPHT = (time: string) => {
    const date = new Date(`1970-01-01T${time}:00Z`);
    return date.toLocaleTimeString("en-PH", { 
      timeZone: "Asia/Manila", 
      hour: "2-digit", 
      minute: "2-digit", 
      hour12: true 
    });
  };
  
  const convertedTime = convertToPHT(selectedTime);

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-end gap-52"
      style={{
        backgroundImage: `url(${SeeYouBubu})`,
        backgroundSize: "30%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[50%] flex  flex-col justify-evenly mb-32 border shadow-md p-5 shadow-yellow-200">
        <CustomText label={
          `Don't forget on "February 14, 2025 at 
          ${convertedTime}" we have a date at 
          "${selectedFood}", and after that we'll watch 
          "${selectedMovie}"!💖💖💖`}
                  />
      </div>
    </div>
  )
}