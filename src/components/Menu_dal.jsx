import styles from "./Menu_dal.module.css";
const Menu_dal = () => {
  return (
    <div className={styles.main_menu}>
      <div className={styles.head_menu}>
        <div className={styles.menu_1}>
          <div className={styles.m_2}></div>
          <div className={styles.m_1}>Pakoda Kadhi</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_21}></div>
          <div className={styles.m_1}>Jeera Rice</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_22}></div>
          <div className={styles.m_1}>Hydrabadi Biryani</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_23}></div>
          <div className={styles.m_1}>Dal Tadka</div>
        </div>
      </div>
    </div>
  );
};
export default Menu_dal;
