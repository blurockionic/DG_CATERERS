import styles from "./Choice.module.css";
const Choice = () => {
  return (
    <div className={styles.main_choice}>
      <div className={styles.main_choice_1}>
        <div className={styles.choice_1}>
          <div className={styles.ch_1}>
            <h3 className={styles.head}>25+</h3>
            <p className={styles.head_1}>Years Of Excellence</p>
          </div>
        </div>
        <div className={styles.choice_2}>
          <div className={styles.ch_1}>
            <h3 className={styles.head}>250+</h3>
            <p className={styles.head_1}>Menu Options</p>
          </div>
        </div>
        <div className={styles.choice_3}>
          <div className={styles.ch_1}>
            <h3 className={styles.head}>340</h3>
            <p className={styles.head_1}>Staff</p>
          </div>
        </div>
        <div className={styles.choice_4}>
          <div className={styles.ch_1}>
            <h3 className={styles.head}>125k</h3>
            <p className={styles.head_1}>Happy Foodies</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Choice;
