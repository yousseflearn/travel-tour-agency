import "./banner.css";
import skyScrapper from "../../images/skyscraper.jpg";
function Banner() {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <div className="banner-layout">
          <h1 className="banner-layout-title">Ras Al-Khaimah wait you!</h1>
        </div>
        <img src={skyScrapper} alt="rak banner" className="banner-img" />
      </div>
    </div>
  );
}

export default Banner;
