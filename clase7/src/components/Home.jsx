import "./home.css";
import logo from "../assets/logo192.png";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header navbar">
          <img className="logo" src={logo} alt="logo" />
          <div className={`nav-items ${isOpen && "open"}`}>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/about">About</a>
            <a href="/about">About</a>
            <a href="/about">About</a>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
