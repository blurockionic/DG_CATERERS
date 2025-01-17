import styles from "./About_article.module.css";
import Button from "./Button";
const About_article = () => {
  return (
    <>
      <div className={styles.mainarticle}>
        <div className={styles.main_article_1}>
          <div className={styles.article_box_1}></div>
          <div className={styles.article_box_2}></div>
          <div className={styles.circle}>
            <div className={styles.small}>
              <h3 className={styles.s1}>Since</h3>
              <h2 className={styles.s2}>1998</h2>
            </div>
          </div>
          <div className={styles.article_box_3}>
            <div className={styles.abox_2}>ABOUT US</div>
            <div className={styles.abox_1}>
              Indulge in a celebration with great food!
            </div>
            <div className={styles.abox_3}>
              DG Caterers Service is a professional catering company that was
              established in 1998, offering comprehensive services to meet all
              your culinary needs nearly two decades. Our primary goal is to
              provide a unique and memorable dining experience with each meal we
              serve. We are committed to maintaining uncompromised quality,
              exceptional hygiene standards, meticulous presentation and
              attention to detail to ensure the utmost satisfaction of our
              customers.
            </div>
            <Button text="Book Now" className="about_button" />
          </div>
        </div>
      </div>
    </>
  );
};
export default About_article;
