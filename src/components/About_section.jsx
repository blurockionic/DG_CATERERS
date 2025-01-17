import styles from "./About_section.module.css";
const About_Section = ({text , name}) => {
  return(
    <div className={styles.main_section }>
      <div className={styles.about_section_1}>
        {text}
      </div>
      <div className={styles.about_section_2}>
        Home / {name}
      </div>
    </div>
  );
};
export default About_Section;