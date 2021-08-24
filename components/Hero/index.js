import React from "react";
import styles from "./Hero.module.css";

function index() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.conteiner}>
          <div className={styles.heroContent}>
            <p className={styles.heroOverTitle}>Food app</p>
            <h2 className={styles.heroTitle}>
              Why stay hungry when
              <br /> you can order form Bella Onojie
            </h2>
            <p className={styles.heroDescription}>
              Download the bella onoje’s food app now on
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
      <section className={styles.appExample}>
        <img src="images/hp-hero.png" className={styles.hpHero} alt="" />
        
      </section>
    </>
  );
}

export default index;
