import React from "react";
import styles from "./HowWork.module.css";

function index() {
  return (
    <section className={styles.howWork}>
      <div className={styles.conteiner}>
        <div className={styles.howWorkContent}>
          <span className={styles.divider}></span>
          <h2>How the app works</h2>
          {/* Step 1 */}
          <div className={styles.step}>
            <div className={styles.WrapperImageStep}>
              <img src="images/step-1.png" alt="" />
            </div>
            <div className={styles.stepContent}>
              <h4>Create an account</h4>
              <h3>Create/login to an existing account to get started</h3>
              <p>
                An account is created with your email and a desired password
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className={`${styles.step} ${styles.inverseStep}`}>
            <div className={styles.WrapperImageStep}>
              <img src="images/step-2.png" alt="" />
            </div>
            <div className={styles.stepContent}>
              <h4>Explore varieties</h4>
              <h3>Shop for your favorites meal as e dey hot.</h3>
              <p>
                Shop for your favorite meals or drinks and enjoy while doing it.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className={styles.step}>
            <div className={styles.WrapperImageStep}>
              <img src="images/step-3.png" alt="" />
            </div>
            <div className={styles.stepContent}>
              <h4>Checkout</h4>
              <h3>When you done check out and get it delivered.</h3>
              <p>When you done check out and get it delivered with ease.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
