import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
// import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import '../Assets/Nav.css'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      <div>
    
    <nav className="navbar">
        <div className="logo">
            <img src="https://i.pinimg.com/originals/2c/d8/9d/2cd89dc044fb90af05b9449431c17fb1.jpg" alt="Logo"/>
        </div>
        <ul>
            <li ><Link to="/Login">Login</Link></li>
            <li ><Link to="/Signup">Sign Up</Link></li>
            
            
        </ul>
    </nav>
</div> 
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Veggies Delivered Quick & Fresh
          </h1>
          <p className="primary-text">
            Healthy  and easy switcher to healthier future!
          </p>
          <button className="secondary-button"><Link to="/Signup">
            Let's Grab! <FiArrowRight />{" "}</Link>
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;