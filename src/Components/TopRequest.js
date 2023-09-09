import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

import { Link } from "react-router-dom";

const TopRequest = () => {
  return (
    <div>
      <div className="request-div">
        <div className="logo">
          <a href="/" content="monchi">
            <h2>Monchi</h2>
          </a>
        </div>
        <div className="instagram">
          <Link to="https://www.instagram.com/monchi.uz/" target={"_blank"}>
            <FaInstagram />
          </Link>
          <Link to="https://telegram.me/Donibespoke" target={"_blank"}>
            <FaTelegramPlane />
          </Link>

          <Link to="https://www.facebook.com/donibespoke/" target={"_blank"}>
            <FaFacebookF />
          </Link>
        </div>
        <div className="requ-namber">
          <p>Записаться на примерку +998979333311</p>
        </div>
      </div>
    </div>
  );
};

export default TopRequest;
