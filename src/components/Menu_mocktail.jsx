import styles from "./Menu_mocktail.module.css";
const Menu_mocktail = () => {
  return (
    <div className={styles.main_menu}>
      <div className={styles.head_menu}>
        <div className={styles.menu_1}>
          <div className={styles.m_2}></div>
          <div className={styles.m_1}>Chili Mojito</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_21}></div>
          <div className={styles.m_1}>Tang Mojito</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_22}></div>
          <div className={styles.m_1}>White ice Burg</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_23}></div>
          <div className={styles.m_1}>Melon Cooler</div>
        </div>
      </div>
    </div>
    
  );
};
export default Menu_mocktail;