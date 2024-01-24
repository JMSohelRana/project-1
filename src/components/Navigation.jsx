import brandImage from "../../public/images/brand_logo.png";
const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={brandImage} alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className="button">Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
