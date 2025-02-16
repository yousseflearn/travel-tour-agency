import "./App.css";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroHeader from "./components/hero-header/HeroHeader";
import Services from "./components/services/Services";
import TourList from "./components/tour/TourList";
import { toursList } from "./data";
import Pagination from "./components/pagination/Pagination";
import { useState } from "react";
import SortInput from "./components/sort-input/SortInput";
import { paginate } from "./utils/pagination";
import Banner from "./components/banner/Banner";
import NewsLetter from "./components/news-letter/NewsLetter";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortItem, setSortItem] = useState("recommended");

  // Sort Tour
  const sortedTourList =
    sortItem === "low"
      ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
      : sortItem === "high"
      ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
      : toursList.sort((a, b) => b.rating - a.rating);

  const { pages, orderedTourList } = paginate(
    toursList.length,
    sortedTourList,
    currentPage
  );
  return (
    <div className="App">
      <Header />
      <HeroHeader />
      <Services />
      <SortInput
        sortItem={sortItem}
        setSortItem={setSortItem}
        toursLength={toursList.length}
      />
      <TourList toursList={orderedTourList} />
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Banner />
      <NewsLetter />
    </div>
  );
}

export default App;
