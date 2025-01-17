import styles from "./About_about.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
const About_about = () => {
  return (
    <div className={styles.main_about}>
      <div className={styles.head_about}>
        <div className={styles.head_about1}>
          <div className={styles.hb_1}>
            <h3 className={styles.about_1}>Testimonial</h3>
            <h2 className={styles.about_2}>What People's Say About
            us?</h2>
          </div>
          <div className={styles.hb_2}>
          <h3 className={styles.about_3}>
              <p className={styles.paragraph_1}>            
              From a neighbour i got to know this catering service. Booked and we shared our menu for our house warming at TVS emerald Atrium, Chennai. We got quality food and excellent service from the catering team with worthy cost. From table cover to beeda, top to bottom good service. Very satisfied with the team. All our guests satisfied with the food. Thanks to Venus catering service team.</p>
              <div className={styles.name_1}>Karthikkrv85</div>
          </h3>
          </div>
          <div className={styles.arrow_div}>
          <div className={styles.arrow_1}><FaArrowLeft className="right"/></div>
          <div className={styles.arrow_1}><FaArrowRight className="right"/></div>
          </div>
        </div>
        <div className={styles.head_about2}>
          <div className={styles.head_b1}></div>
        </div>
      </div>
    </div>
  );
};
export default About_about;