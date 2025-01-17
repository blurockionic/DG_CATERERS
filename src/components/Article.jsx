import styles from "./Article.module.css";
import Button from "./Button";
const Article = () => {
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
              Elevating Your Events with Exceptional Food.
            </div>
            <div className={styles.abox_3}>
              Venus is The Place where Food is Celebrated over 25 Years. We Love
              to Create Unforgettable Culinary Experiences.
            </div>
            <div className={styles.abox_4}>
              <div className={styles.card}>
                <div className={styles.c1}></div>
                <div className={styles.cd_1}>25 Years of Experience</div>
              </div>
              <div className={styles.card1}>
                <div className={styles.c2}></div>
                <div className={styles.cd_2}>2000+ Successful Marriages</div>
              </div>
              <div className={styles.card2}>
                <div className={styles.c3}></div>
                <div className={styles.cd_3}>98% Repeated Customers</div>
              </div>
            </div>
            <a className="remove_1" href="/about">
              <Button text="More About Us" className="about_btn" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Article;
