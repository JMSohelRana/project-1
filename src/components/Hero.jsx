import shoeImage from "../../public/images/shoe_image.png";
import flipkart from "../../public/images/flipkart.png";
import amazon from "../../public/images/amazon.png";
export const Hero = () => {
  return (
    <main>
      <div className="hero container">
        <div className="main-container">
          <h1>your feet deserve the best</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-btn">
            <button className="shop-btn">Shop Now</button>
            <button className="category-btn">Category</button>
          </div>
          <div className="shopping">
            <p>Also Available</p>
            <div className="brand-icon">
              <img className="brand-icon" src={flipkart} alt="flip" />
              <img className="brand-icon" src={amazon} alt="flip" />
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={shoeImage} alt="" />
        </div>
      </div>
    </main>
  );
};
