import React from "react";
import './home.css';
import {FaShippingFast, FaDollarSign, FaHeadset } from "react-icons/fa";
import {BsEmojiHeartEyesFill, BsEmojiSunglasses, BsFillEmojiWinkFill} from "react-icons/bs";

const Home = () =>{
    return(
        <section className="body">
        <div className="top-section">
          <div className="introduction">
            <h3>Today's special dish <BsEmojiHeartEyesFill/></h3>
            <span>spicy chicken </span>
            <p>Only Ksh 700 special offer! <BsEmojiSunglasses/></p>
            <button className="btn">Limited offer!</button>
          </div>
          <div className="imageOne">
            <img src="/images/home-img-2.png" alt="fried chicken" />
          </div>
        </div>
  
        <div className="info-section">
          <h2 class="heading"> why choose us? </h2>
  
          <div className="info">
            <div className="imageOne">
              <img src="/images/home-img-3.png" alt="fried chicken" />
            </div>
  
            <div className="introduction">
              <h3>best food in the country</h3>
              <p> Why pay more for less? <BsFillEmojiWinkFill/></p>
              <div className="descriptionIcons">
                <div className="icons">
                  <FaShippingFast/>
                <span>free delivery</span>
                </div>
                <div className="icons">
                  <FaDollarSign/>
                <span>easy payments</span>
                </div>
                <div className="icons">
                  <FaHeadset/>
                <span>24/7 payments</span>
                </div>
              </div>
              <button className="btn">Learn more</button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Home;