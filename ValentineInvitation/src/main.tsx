import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { App } from './path/App'
import { Rejected } from './path/Rejected'
import { Accepted } from "./path/TimeSelection";
import { FoodSelection } from "./path/FoodSelection";
import { MovieSelection } from "./path/MovieSelection";
import { ExcitementRate } from "./path/ExcitementRate";
import { SeeYou } from "./path/SeeYou";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/accepted" element={<Accepted/>}/>
        <Route path="/rejected" element={<Rejected/>}/>
        <Route path="/food-selection" element={<FoodSelection/>} />
        <Route path="/movie-selection" element={<MovieSelection/>} />
        <Route path="/excitement-rate" element={<ExcitementRate/>} />
        <Route path="/see-you" element={<SeeYou/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
