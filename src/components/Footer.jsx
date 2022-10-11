import React from "react";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__socialIcons">
        <img src={"../../icons/Vector.svg"} alt="fb_logo" />
        <img src={"../../icons/Vector2.svg"} alt="insta_logo" />
        <img src={"../../icons/Vector3.svg"} alt="twitter_logo" />
        <img src={"../../icons/Vector4.svg"} alt="youtube_logo" />
      </div>
      <div className="footer__links">
        <div className="links_div">
          <a href="#">Link1</a>
          <a href="#">Link2</a>
          <a href="#">Link3</a>
          <a href="#">Link4</a>
        </div>
        <div className="links_div">
          <a href="#">Link1</a>
          <a href="#">Link2</a>
          <a href="#">Link3</a>
        </div>
        <div className="links_div">
          <a href="#">Link1</a>
          <a href="#">Link2</a>
          <a href="#">Link3</a>
        </div>
        <div className="links_div">
          <a href="#">Link1</a>
          <a href="#">Link2</a>
          <a href="#">Link3</a>
        </div>
      </div>
      <div className="footer__button">
          <button className="footer__button">Service Code</button>
      </div>
      <div className="footer__license">
        <span>© 1997-2021 Netflix, Inc.i-062d573a0ee099242</span>
      </div>
    </div>
  );
};

export default Footer;
