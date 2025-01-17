import styles from "./Section.module.css";
import Animation from "./Animation";
import { Link } from "react-router-dom";
import Button from "./Button";
const Section = () => {
  return (
    <div className={styles.main_section}>
      <div className={styles.middle_box}>
        <div className={styles.first_box}>
          <div className={styles.first_head}>
            <h6>
              WELCOME TO VENUS CATERING SERVICE{" "}
              <span className={styles.paradot}>•</span>
            </h6>
          </div>
        </div>
        <div className={styles.second_head}>
          <Animation></Animation>
        </div>
        <div className={styles.third_head}>
          <div className={styles.third_1}>
            We are the top vegetarian wedding caterer in Tamil Nadu. We have
            completed over 2,000+
          </div>
          <div className={styles.third_2}>
            <p>weddings, supported by a professional team of 340 members.</p>
          </div>
          <div className={styles.fourth_head}>
            <Link className="remove" to="/menu">
              <Button
                text="Explore"
                className="explore_btn"
                arrowContainerClass="arrow_btn"
              />
            </Link>
            <span className={styles.gapspan}></span>
            <Link className="remove" to="/contact">
              <Button
                text="Contact"
                className="contact_btn"
                arrowContainerClass="arrow_btn"
              />
            </Link>
          </div>
        </div>
        <div className={styles.arrow}>
          <div class={styles.mouse_icon}></div>
        </div>
      </div>
    </div>
  );
};
export default Section;
