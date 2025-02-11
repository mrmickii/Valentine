import { useLocation, useNavigate } from "react-router-dom"
import { CustomText } from "../components/CustomText";
import { CustomCard } from "../components/CustomCard";
import Marvel from "../assets/movies/marvel.png"
import HxH from "../assets/movies/hxh.jpg";
import Slime from "../assets/movies/slime.webp"
import Kingsman from "../assets/movies/kingsman.jpg"
import KDrama from "../assets/movies/kdrama.jpeg"
import Moana from "../assets/movies/moana.jpeg"

export const MovieSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {selectedTime, selectedFood} = location.state || {}

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-evenly">
      <div className="p-5">
        <CustomText label="What do you want to watch?"/>
      </div>
      <div className="flex justify-center items-center gap-10 max-w-screen-xl flex-wrap">
        <CustomCard 
          image={Marvel} 
          label="Marvel Cenimatic Universe"
          onClick={() => {
            navigate("/excitement-rate", 
              {state: {
                selectedMovie: "Marvel Cenimatic Universe", 
                selectedFood: selectedFood, 
                selectedTime: selectedTime
              }}
            );
          }}
        />
        <CustomCard 
          image={HxH} 
          label="Hunter x Hunter"
          onClick={() => {
            navigate("/excitement-rate", {state: {
              selectedMovie: "Hunter x Hunter", 
              selectedFood: selectedFood, 
              selectedTime: selectedTime
            }});
          }}
        />
        <CustomCard 
          image={Slime} 
          label="That Time I Got Reincarnated as a Slime"
          onClick={() => {
            navigate("/excitement-rate", 
              {state: {
                selectedMovie: "That Time I Got Reincarnated as a Slime", 
                selectedFood: selectedFood, 
                selectedTime: selectedTime
              }}
            );
          }}
        />
        <CustomCard 
          image={Kingsman} 
          label="Kingsman"
          onClick={() => {
            navigate("/excitement-rate", 
              {state: {
                selectedMovie: "Kingsman", 
                selectedFood: selectedFood, 
                selectedTime: selectedTime
              }}
            );
          }}
        />
        <CustomCard 
          image={KDrama} 
          label="A Shop For Killers"
          onClick={() => {
            navigate("/excitement-rate", 
              {state: {
                selectedMovie: "A Shop For Killers", 
                selectedFood: selectedFood, 
                selectedTime: selectedTime
              }}
            );
          }}
        />
        <CustomCard 
          image={Moana} 
          label="Moana 2"
          onClick={() => {
            navigate("/excitement-rate", 
              {state: {
                selectedMovie: "Moana 2", 
                selectedFood: selectedFood, 
                electedTime: selectedTime
              }}
            );
          }}
        />
      </div>
    </div>
  )
}