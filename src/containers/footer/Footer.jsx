import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p> 3180 18th St,<br/> San Francisco,<br/> United States,</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Latest advancements</h4>
        <p>GPT-4o</p>
        <p> GPt-4</p>
        <p>DALL-E 3</p>
        <p>Sora</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>About us </p>
        <p>Our Charter</p>
        <p>News</p>
        <p>Careers</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Terms and Policies</h4>
        <p>Terms of use</p>
        <p>privacy policy</p>
        <p>Brand guidelines</p>
        <p>Other policies</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>2021 GPT-3. &#169; All rights reserved.</p>
    </div>
  </div>
);

export default Footer;