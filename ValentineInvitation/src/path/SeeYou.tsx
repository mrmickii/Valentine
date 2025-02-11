import { useLocation } from "react-router-dom";
import { CustomText } from "../components/CustomText";
import SeeYouBubu from "../assets/others/see-you-bubu.gif";

export const SeeYou = () => {
  const location = useLocation();
  const { selectedFood, selectedMovie, selectedTime } = location.state || {};

  const convertToPHT = (time: string) => {
    const date = new Date(`1970-01-01T${time}:00Z`);
    return date.toLocaleTimeString("en-PH", {
      timeZone: "Asia/Manila",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const convertedTime = convertToPHT(selectedTime);

  return (
    <div
      className="flex flex-col h-screen w-screen items-center justify-end px-4 sm:px-0 pb-10 sm:pb-0 relative"
      style={{
        backgroundImage: `url(${SeeYouBubu})`,
        backgroundSize: window.innerWidth < 640 ? "60%" : "35%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top 20% center"
      }}
    >
      {/* 💖 Floating Hearts Animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-pink-300/70 rounded-full animate-float"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          />
        ))}
      </div>

      {/* 🌸 Date Info Card */}
      <div className="w-full sm:w-[50%] max-w-md bg-white/80 rounded-2xl flex flex-col justify-evenly border shadow-lg p-6 shadow-pink-300 text-center">
        <CustomText
          label={`💖 Don't forget, on **February 14, 2025 at ${convertedTime},  
          we have a sweet date at "${selectedFood}"!  
          🍿 After that, we'll watch "${selectedMovie}" together! 🎥💕`}
        />
      </div>
    </div>
  );
};
