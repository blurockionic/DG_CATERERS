import styles from "./About_services.module.css";
const About_services = () => {
  return (
    <div className={styles.main_services}>
      <div className={styles.head_services}>
        <div className={styles.services_1}>
          <h4 className={styles.services_h}>Always Quality</h4>
          <h2 className={styles.services_h1}>Our Team</h2>
        </div>
      </div>
      <div className={styles.h_services}>
        <div className={styles.services_2}>
          <div className={styles.services_3}>
            <div className={styles.card_service1}></div>
            <div className={styles.founder}>FOUNDER</div>
            <div className={styles.card_s1}>
              <h3 className={styles.card_h1}>PROP.J.GURUMURRTHY</h3>
              <p className={styles.card_p1}>
              B.SC., M.B.A., M.T.M., M.Phil., Ph.D[p].
              </p>
            </div>
          </div>
          <div className={styles.services_4}>
            <div className={styles.card_service2}></div>
            <div className={styles.card_s2}>
            <div className={styles.ceo}>CEO</div>
            <h3 className={styles.card_h2}>RUDHRESH GK</h3>
              <p className={styles.card_p2}>
              B.E
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About_services;