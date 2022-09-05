import React from 'react'
import './about.css';
import {FaPaypal, FaCcVisa, FaStripe, FaFacebook, FaTwitter, FaInstagramSquare} from "react-icons/fa";
import {FiPhoneCall} from "react-icons/fi";

const About = () => {
  return (
    <section className="about">
      <div className="aboutContainer">
      <div className="top-section">
      <div className="imageOne">
          <img src="/images/home-img-1.png" alt="menu" />
        </div>
        <div className="introduction">
        <h3>Cuisine delicacy:</h3>
            <div className="descriptionIcons">
            
          <p>We value quality and nothing less.<br />Try us and you won't regrate. </p>
            </div>
            <button className="btn">Learn more</button>
          </div>
      </div>
     
      <div className="top-section">
      <div className="imageOne">
          <img src="/images/dish-6.png" alt="menu" />
        </div>
        <div className="introduction">
            <h3>Payments:</h3>
            <div className="descriptionIcons">
              <div className="icons">
                <FaPaypal/>
              <span>Paypal</span>
              </div>
              <div className="icons">
                <FaCcVisa/>
              <span>Visa</span>
              </div>
              <div className="icons">
                <FaStripe/>
              <span>Stripe</span>
              </div>
              
            </div>
            <button className="btn">Learn more</button>
          </div>
      </div>
      </div>
      <div className="top-section">
      <div className="imageOne">
          <img src="/images/dish-3.png" alt="menu" />
        </div>
        <div className="footerOne">
          <h3>Our services</h3>
          <p>Prepare events</p>
          <p>Chefs for hire</p>
          <p>Instant delivery</p>
          <p>Quality meals</p>
        </div>
        <div className="footerOne">
        <h3>Useful Links</h3>
          <p>Google maps</p>
          <p>Our partners</p>
          <p>Feedback</p>
          <p>Inquires</p>
        </div>
        <div className="footerOne">
        <h3>Talk to us</h3>
          <p><FiPhoneCall/> : 0700000000</p>
          <p><FaTwitter/> : Cuisine_Deli</p>
          <p><FaFacebook/> : CuisineDeli</p>
          <p><FaInstagramSquare/> : @CuisineDeli</p>
        </div>
      </div>
    </section>
  )
}

export default About