import React from "react";
import styles from "./Download.module.css";

function index() {
  return (
    <section className={styles.download}>
      <div className={styles.conteiner}>
        <div className={styles.downloadContent}>
          <h2>Download the app now.</h2>
          <p>
            Available on your favorite store. Start your premium experience now
          </p>
          <div className={styles.cta}>
            <a href="#" className={styles.btnPlaystore}>
              Playstore
            </a>
            <a href="#" className={styles.btnAppstore}>
              App store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
