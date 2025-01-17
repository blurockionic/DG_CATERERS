import styles from "./About.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
const About = () => {
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
              A very special day today in our life and this is the second time we booked Venus catering for birthday party and as expected the food and service was extremely well.Multi ple varieties and all tastes were awesome. All our guests enjoyed and specially mentioned about food taste. Many thanks to DG Caterers .. We really enjoyed and also India won today's match... Soo happy. Will definitely refer to all our friends and relatives😀.</p>
              <div className={styles.name_1}>vinoth.R Sugan</div>
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
export default About;