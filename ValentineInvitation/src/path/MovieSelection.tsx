import { useLocation, useNavigate } from "react-router-dom";
import { CustomText } from "../components/CustomText";
import { CustomCard } from "../components/CustomCard";
import Marvel from "../assets/movies/marvel.png";
import HxH from "../assets/movies/hxh.jpg";
import Slime from "../assets/movies/slime.webp";
import Kingsman from "../assets/movies/kingsman.jpg";
import KDrama from "../assets/movies/kdrama.jpeg";
import Moana from "../assets/movies/moana.jpeg";
import Heart from '../assets/others/peach-goma-love-peach-cat.gif';

export const MovieSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedTime, selectedFood } = location.state || {};

  const handleSelectMovie = (movie: string) => {
    navigate("/excitement-rate", {
      state: { selectedMovie: movie, selectedFood, selectedTime },
    });
  };

  const movies = [
    { image: Marvel, label: "Marvel Cinematic Universe" },
    { image: HxH, label: "Hunter x Hunter" },
    { image: Slime, label: "That Time I Got Reincarnated as a Slime" },
    { image: Kingsman, label: "Kingsman" },
    { image: KDrama, label: "A Shop For Killers" },
    { image: Moana, label: "Moana 2" },
  ];

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-evenly px-4"
      style={{
        backgroundImage: `url(${Heart})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="p-5 text-center">
        <CustomText label="What do you want to watch?" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-screen-lg">
        {movies.map(({ image, label }) => (
          <CustomCard key={label} image={image} label={label} onClick={() => handleSelectMovie(label)} />
        ))}
      </div>
    </div>
  );
};
