import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";
import logo from "../utils/assets/logo.jpg";

const Header = () => {
  return (
    <div className={styles.header__wrapper}>
      <div className={styles.header__logo}>
        <Link href="/" as={`/`}>
          <Image className="" src={logo} alt="logo" width={80} height={60} />
        </Link>
      </div>
      <div className={styles.header__item}>
        <Link href="/" as={`/`}>
          <a>Главная</a>
        </Link>
      </div>
      <div className={styles.header__item}>
        <Link href="/books" as={`/books`}>
          <a>Книги</a>
        </Link>
      </div>
      <div className={styles.header__item}>
        <Link href="/about" as={`/about`}>
          <a>О проекте</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
