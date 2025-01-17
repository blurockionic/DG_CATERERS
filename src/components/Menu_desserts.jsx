import styles from "./Menu_desserts.module.css";
const Menu_desserts = () => {
  return (
    <div className={styles.main_menu}>
      <div className={styles.head_menu}>
        <div className={styles.menu_1}>
          <div className={styles.m_2}></div>
          <div className={styles.m_1}>Monster Cookie</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_21}></div>
          <div className={styles.m_1}>Chocolate Bath</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_22}></div>
          <div className={styles.m_1}>Salted Caramel</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_23}></div>
          <div className={styles.m_1}>Chocolate Lava</div>
        </div>
      </div>
    </div>
  );
};
export default Menu_desserts;
