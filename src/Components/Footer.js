import React, { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Images/monchigold.png";
import "aos/dist/aos.css";
import Aos from "aos";

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="footer">
      <div>
        <div className="footer-logo">
          <img src={logo} alt="hello" />
        </div>
        <div className="footer-text">
          <div>
            <h3 data-aos="fade-up" data-aos-duration="1000">
              Творения по индивидуальному заказу.
            </h3>
            <h4 data-aos="fade-up" data-aos-duration="1500">
              Вы можете найти нас здесь
            </h4>
            <iframe
              data-aos="zoom-in"
              data-aos-duration="2500"
              className="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874.8491689770128!2d66.9620102166779!3d39.65701568154511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19a547d7f219%3A0xcd88ce9958b638e9!2sBagozza%20Samarkand!5e0!3m2!1sru!2s!4v1693692927689!5m2!1sru!2s"
              width="400"
              height="250"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="iframe"
            ></iframe>
            <div
              data-aos="flip-up"
              data-aos-duration="1000"
              className="footer-social"
            >
              <Link to="https://www.instagram.com/monchi.uz/" target={"_blank"}>
                <FaInstagram />
              </Link>
              <Link to="https://telegram.me/Donibespoke" target={"_blank"}>
                <FaTelegramPlane />
              </Link>

              <Link
                to="https://www.facebook.com/donibespoke/"
                target={"_blank"}
              >
                <FaFacebookF />
              </Link>
            </div>
            <p className="copyright">
              Copyright by Ashrafkhan Azamov © 2023 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
