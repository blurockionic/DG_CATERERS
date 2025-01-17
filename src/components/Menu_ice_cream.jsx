import styles from "./Menu_ice_cream.module.css";
const Menu_ice_cream = () => {
  return (
    <div className={styles.main_menu}>
      <div className={styles.head_menu}>
        <div className={styles.menu_1}>
          <div className={styles.m_2}></div>
          <div className={styles.m_1}>Strawberry</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_21}></div>
          <div className={styles.m_1}>Kesar Pista</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_22}></div>
          <div className={styles.m_1}>Chocolate</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_23}></div>
          <div className={styles.m_1}>Blueberry</div>
        </div>
      </div>
      <div className={styles.head_menu}>
        <div className={styles.menu_1}>
          <div className={styles.m_24}></div>
          <div className={styles.m_1}>Madagascar Chocolate</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_25}></div>
          <div className={styles.m_1}>Lemon Meri</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_26}></div>
          <div className={styles.m_1}>Lavender Lychee</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_27}></div>
          <div className={styles.m_1}>Kevda Kesar</div>
        </div>
      </div>
    </div>
  );
};
export default Menu_ice_cream;
