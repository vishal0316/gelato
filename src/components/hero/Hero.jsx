import "./hero.css";
import hero from "../../assets/hero.png";
import shopify from "../../assets/shopify.png";
import { IoMdStar } from "react-icons/io";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>Print on demand for your ecommerce business</h1>
          <h5>Sign up for free and only pay for what you sell</h5>
          <p>
            Turn your passion into profit with the world s largest print on
            demand network.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get started for free</button>
            <button className="btn-secondary">See our products</button>
          </div>
          <div className="shopify-rating">
            <img src={shopify} alt="Shopify logo" />
            <div className="rating">
              <IoMdStar className="star" />
              <IoMdStar className="star" />
              <IoMdStar className="star" />
              <IoMdStar className="star" />
              <IoMdStar className="star" />
              <span>4.8 / 5</span>
              <span>based on 887 reviews</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={hero} alt="Product collage" />
        </div>
      </div>

      <div className="container">
        <div className="stat-block">
          <div>90%</div>
          <div style={{ fontSize: "24px" }}>of orders are produced locally</div>
        </div>
        <div className="stat-block">
          <div>90%</div>
          <div style={{ fontSize: "24px" }}>
            of orders arrive within 5 days of ordering
          </div>
        </div>
        <div className="stat-block">
          <div>140+</div>
          <div style={{ fontSize: "24px" }}>
            print providers across 32 countries
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
