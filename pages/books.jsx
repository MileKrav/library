import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import styles from "../styles/Books.module.css";

const Books = () => {
  return (
    <>
      <Header />
      <div className={styles.books__wrapper}>
        <div className={styles.book}>
          <div className={styles.book__img}>
            <p>Место для изображения</p>
            <img />
          </div>
          <p>Краткое описание книги</p>
        </div>
        <div className={styles.book}>
          <div className={styles.book__img}>
            <p>Место для изображения</p>
            <img />
          </div>
          <p>Краткое описание книги</p>
        </div>
        <div className={styles.book}>
          <div className={styles.book__img}>
            <p>Место для изображения</p>
            <img />
          </div>
          <p>Краткое описание книги</p>
        </div>
        <div className={styles.book}>
          <div className={styles.book__img}>
            <p>Место для изображения</p>
            <img />
          </div>
          <p>Краткое описание книги</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Books;
