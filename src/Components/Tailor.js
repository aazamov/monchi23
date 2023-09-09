import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";

const Tailor = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="tailor-sec">
      <div className="tailor-box">
        <div
          className="card-wrapper"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="single-card">
            <div className="front"></div>
            <div className="back">
              <div className="card-content">
                <h2 content="Дониёр Обиджонов.">Дониёр Обиджонов</h2>
                <h4>Tailor</h4>
                <p>
                  Меня зовут Дониёр Обиджонов.Вот уже больше 10 лет я работаю в
                  сфере создания эксклюзивного мужского гардероба
                </p>
                <div className="socials">
                  <Link
                    to="https://www.instagram.com/monchi.uz/"
                    target={"_blank"}
                  >
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tailor;
