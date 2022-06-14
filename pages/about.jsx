import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className={styles.about__wrapper}>
        <div> Тут может быть картинка </div>
        <div>
          {" "}
          <div> А тут текст типо, что ресурс был создан того то</div>
          того в результате выполнения дипломоной работы
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
