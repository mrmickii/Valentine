import Excited from '../assets/others/excited.gif'
import { CustomText } from "../components/CustomText"
import { CustomSlider } from "../components/CustomSlider";
import { CustomButton } from '../components/CustomButton';
import { useNavigate, useLocation } from 'react-router-dom';

export const ExcitementRate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedTime, selectedFood, selectedMovie } = location.state || {}

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-evenly gap-52"
      style={{
        backgroundImage: `url(${Excited})`,
        backgroundSize: "20%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <div className="p-5">
        <CustomText label="How excited are you?"/>
      </div>
      <div>
        <CustomSlider min={0} max={100} step={5} onChange={(value) => (value)} />
        <div>
          <CustomButton 
            label='(˶˃ ᵕ ˂˶) Continue' 
            onClick={() => navigate("/see-you", {
              state: {
                selectedFood: selectedFood, 
                selectedMovie: selectedMovie,
                selectedTime: selectedTime
              }})
            }
          />
        </div>
      </div>
    </div>
  )
}