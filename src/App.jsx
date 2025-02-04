import "./App.css";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroHeader from "./components/hero-header/HeroHeader";
import Services from "./components/services/Services";
import TourList from "./components/tour/TourList";
import { toursList } from "./data";
import Pagination from "./components/pagination/Pagination";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const TOUR_PER_PAGE = 6;
  const pages = Math.ceil(toursList.length / TOUR_PER_PAGE);
  const startIndex = (currentPage - 1) * TOUR_PER_PAGE;
  const finishIndex = currentPage * TOUR_PER_PAGE;
  const tours = toursList.slice(startIndex, finishIndex);
  return (
    <div className="App">
      <Header />
      <HeroHeader />
      <Services />
      <TourList toursList={tours} />
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
