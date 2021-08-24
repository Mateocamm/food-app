import React from "react";
import styles from "./Header.module.css";

function index() {
  return (
    <header className={styles.header}>
      <div className={styles.conteiner}>
        <div className={styles.headerContent}>
          <a href="#">
            <img src="images/food-logo.png" className={styles.logo} alt="" />
          </a>

          <ul className={styles.navBar}>
            <li className={styles.navItem}>
              <a href="#" className={`${styles.navLink} ${styles.linkSelected}`}>
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Product
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Faq
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default index;
