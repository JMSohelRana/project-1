import brandImage from "../public/images/brand_logo.png";
import "./App.css";
function App() {
  return (
    <>
      <div className="container">
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
    </>
  );
}

export default App;
