import React, { useEffect } from "react";
import Img from "../Images/blobb.jpg";
import "aos/dist/aos.css";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="about" data-aos="fade-up" data-aos-duration="2500">
      <div className="about-text">
        <h3>О нас</h3>

        <p content="monchi">
          Здравствуйте, наши дорогие клиенты и просто друзья! Меня зовут Дониёр
          Обиджонов. Я основатель ателье "Doni bespoke" и одежды бренда
          "MONCHI". Вот уже больше 10 лет я работаю в сфере создания
          эксклюзивного мужского гардероба. Мы создаём эксклюзивные костюмы,
          брюки, рубашки, жилетки, пальто по технологии bespoke и по технологии
          МТМ (made to measure). Также у нас вы можете заказать выездное
          обслуживание, приобрести фирменные итальянские и английские ткани от
          ведущих мировых брендов как Scabal, Holland & Sherry, Loro Piano,
          Dormuil, Harrison's of Edinburgh, Fox brother's, Standaven, Cerruti,
          Caccioppoli, Drago, Carnet, VBC и т.д.
        </p>
        <meta
          name="description"
          content="основатель ателье `Doni bespoke` и одежды бренда
          MONCHI"
        />
        <meta
          name="keywords"
          content="Monchi, Doni bespoke ,Дониёр Обиджонов "
        />
      </div>
      <div className="blob-wraper">
        <div className="blob-item">
          <img src={Img} alt="monchi" />
        </div>
      </div>
    </div>
  );
};

export default About;
