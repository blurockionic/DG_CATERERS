import styles from "./Blog_services.module.css";
const Blog_services = () => {
  return (
    <div className={styles.main_services}>
      <div className={styles.h_services}>
        <div className={styles.services_2}>
          <div className={styles.services_3}>
            <div className={styles.card_service1}></div>
            <div className={styles.card_s1}>
              <h3 className={styles.card_h1}>July 08, 2024</h3>
              <p className={styles.card_p1}>
              The Rising Popularity of Vegetarian Catering: Why More Events Are Going Meat-Free
              </p>
            </div>
          </div>
          <div className={styles.services_3}>
            <div className={styles.card_service2}></div>
            <div className={styles.card_s1}>
              <h3 className={styles.card_h1}>July 08, 2024</h3>
              <p className={styles.card_p1}>
              Delicious and Nutritious: Top 10 Vegetarian Dishes for Your Next Event
              </p>
            </div>
          </div>
          <div className={styles.services_3}>
            <div className={styles.card_service3}></div>
            <div className={styles.card_s1}>
              <h3 className={styles.card_h1}>July 08, 2024</h3>
              <p className={styles.card_p1}>
              Planning the Perfect Vegetarian Menu for Any Occasion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog_services;