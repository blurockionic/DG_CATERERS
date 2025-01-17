import styles from "./About_company.module.css";
import Button from "./Button";
const About_company = () => {
  return (
    <div className={styles.main_company}>
      <div className={styles.head_company}>
        <div className={styles.article_box_3}>
          <div className={styles.abox_1}>A Quality-Driven Catering Company</div>
          <div className={styles.abox_3}>
            We have been one of the successful names in the business when it
            comes to providing catering and services. Our team has completed all
            the events on large and medium scales just the way it has been asked
            by the client. Whether you need service indoors or outdoors, we can
            take care of it just the way you want.
          </div>
          <a className="remove_1" href="/menu">
            <Button text="OUR MENU" className="company_button" />
          </a>
        </div>
        <div className={styles.company1}></div>
      </div>
    </div>
  );
};
export default About_company;
