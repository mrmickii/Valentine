import { useLocation, useNavigate } from "react-router-dom"
import { CustomText } from "../components/CustomText"
import { CustomCard } from "../components/CustomCard"
import Chuson from "../assets/foods/chosun.jpg"
import Buffet from '../assets/foods/buffet101.jpg'
import AngelsPizza from '../assets/foods/angelspizza.jpg'
import BurgerKing from '../assets/foods/bugerking.jpg'
import Wingers from '../assets/foods/wingers.jpg'
import Yukimaru from '../assets/foods/yukimaru.jpg'
import Tamp from '../assets/foods/tamp.png'
import TFChicken from '../assets/foods/24chicken.jpg'
import Jollibee from '../assets/foods/jollibee.jpg'
import Chill from '../assets/others/chill.png'
import Heart from '../assets/others/peach-goma-love-peach-cat.gif'

export const FoodSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedTime = location.state?.time; 

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-evenly"
      style={{
        backgroundImage: `url(${Heart})`,
        backgroundSize: "35%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <div className="p-5">
        <CustomText label="What would want to eat?"/>
      </div>
      <div className="flex justify-center items-center gap-10 max-w-screen-xl flex-wrap">
        <CustomCard 
          image={Chill} 
          label="Home Cook + Chill"
          onClick={() => {
            navigate("/movie-selection", {state: {selectedFood: "Home Cook + Chill", selectedTime: selectedTime}});
          }}
        />
        <CustomCard 
          image={TFChicken} 
          label="24-Chicken"
          onClick={() => {
            navigate("/movie-selection", {state: {selectedFood: "24-Chicken", selectedTime: selectedTime}});
          }}
        />
        <CustomCard 
          image={Yukimaru} 
          label="Yukimaru"
          onClick={() => {
            navigate("/movie-selection", {state: {selectedFood: "Yukimaru", selectedTime: selectedTime}});
          }}
        />
        <CustomCard 
          image={Tamp} 
          label="Tamp"
          onClick={() => {
            navigate("/movie-selection", {state: {selectedFood: "Tamp", selectedTime: selectedTime}});
          }}
        />
        <CustomCard 
          image={Wingers} 
          label="Wingers Unlimited"
          onClick={() => {
            navigate("/movie-selection", {state: {selectedFood: "Wingers Unlimited", selectedTime: selectedTime}});
          }}
        />
        <CustomCard 
          image={Chuson} 
          label="Chuson"
          onClick={() => {
            navigate("/movie-selection", {state: {selectedFood: "Chuson", selectedTime: selectedTime}});
          }}
        />
        <CustomCard 
          image={Jollibee} 
          label="Jollibee"
          onClick={() => {
            navigate("/movie-selection", {state: {selectedFood: "Jollibee", selectedTime: selectedTime}});
          }}
        />
        <CustomCard 
          image={BurgerKing} 
          label="BurgerKing"
          onClick={() => {
            navigate("/movie-selection", {state: {selectedFood: "BurgerKing", selectedTime: selectedTime}});
          }}
        />
        <CustomCard 
          image={AngelsPizza} 
          label="AngelsPizza"
          onClick={() => {
            navigate("/movie-selection", {state: {selectedFood: "AngelsPizza", selectedTime: selectedTime}});
          }}
        />
        <CustomCard 
          image={Buffet} 
          label="Buffet 101"
          onClick={() => {
            navigate("/movie-selection", {state: {selectedFood: "Buffet 101", selectedTime: selectedTime}});
          }}
        />
      </div>
    </div>
  )
}