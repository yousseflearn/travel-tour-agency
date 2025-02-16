import "./news-letter.css";
import newsLetterImage from "../../images/newsLetterImage.jpg";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <div className="news-letter-container">
        <div className="news-letter-image-wrapper">
          <img
            src={newsLetterImage}
            alt="newsLetter"
            className="news-letter-image"
          />
        </div>
        <div className="news-letter-content">
          <h2 className="news-letter-content-title">
            Your Ras itinerary is waiting.
          </h2>
          <p className="news-letter-content-description">
            Receive a curated 48-hour itinerary featuring the most iconic
            experience in dubai, straight to your inbox.
          </p>
          <div className="news-letter-inputs">
            <input
              type="text"
              placeholder="Your Email"
              className="news-letter-input"
            />
            <button className="news-letter-btn">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
