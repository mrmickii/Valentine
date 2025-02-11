import { useLocation, useNavigate } from "react-router-dom";
import { CustomText } from "../components/CustomText";
import { CustomCard } from "../components/CustomCard";
import Chuson from "../assets/foods/chosun.jpg";
import Buffet from '../assets/foods/buffet101.jpg';
import AngelsPizza from '../assets/foods/angelspizza.jpg';
import BurgerKing from '../assets/foods/bugerking.jpg';
import Wingers from '../assets/foods/wingers.jpg';
import Yukimaru from '../assets/foods/yukimaru.jpg';
import Tamp from '../assets/foods/tamp.png';
import TFChicken from '../assets/foods/24chicken.jpg';
import Jollibee from '../assets/foods/jollibee.jpg';
import Chill from '../assets/others/chill.png';
import Heart from '../assets/others/peach-goma-love-peach-cat.gif';

export const FoodSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedTime = location.state?.time; 

  const handleSelectFood = (food: string) => {
    navigate("/movie-selection", { state: { selectedFood: food, selectedTime } });
  };

  const foodOptions = [
    { image: Chill, label: "Home Cook + Chill" },
    { image: TFChicken, label: "24-Chicken" },
    { image: Yukimaru, label: "Yukimaru" },
    { image: Tamp, label: "Tamp" },
    { image: Wingers, label: "Wingers Unlimited" },
    { image: Chuson, label: "Chuson" },
    { image: Jollibee, label: "Jollibee" },
    { image: BurgerKing, label: "BurgerKing" },
    { image: AngelsPizza, label: "AngelsPizza" },
    { image: Buffet, label: "Buffet 101" }
  ];

  return (
    <div 
      className="flex flex-col h-screen w-screen items-center justify-evenly px-4"
      style={{
        backgroundImage: `url(${Heart})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="p-5 text-center">
        <CustomText label="What would you like to eat?" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-lg">
        {foodOptions.map(({ image, label }) => (
          <CustomCard key={label} image={image} label={label} onClick={() => handleSelectFood(label)} />
        ))}
      </div>
    </div>
  );
};
