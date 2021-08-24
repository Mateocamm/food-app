import React from "react";
import styles from "./Footer.module.css";

function index() {
  return (
    <footer className={styles.footer}>
      <div className={styles.conteiner}>
        <div className={styles.footerContent}>
          
            <img src="images/food-logo.png" className={styles.logo} alt="log" />
          

          <div className={styles.socialLinks}>
            <img src="images/tw.png" alt="" />
            <img src="images/fb.png" alt="" />
            <img src="images/ig.png" alt="" />
          </div>

          <p>Copyright 2020 Bella Onojie.com</p>
        </div>
      </div>
    </footer>
  );
}

export default index;
