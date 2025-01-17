import styles from "./Menu_cake.module.css";
const Menu_cake = () => {
  return (
    <div className={styles.main_menu}>
      <div className={styles.head_menu}>
        <div className={styles.menu_1}>
          <div className={styles.m_2}></div>
          <div className={styles.m_1}>Chocolate Oreo</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_21}></div>
          <div className={styles.m_1}>Fruit Caramel</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_22}></div>
          <div className={styles.m_1}>Chocolate Hazelnut</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_23}></div>
          <div className={styles.m_1}>White Crystal</div>
        </div>
      </div>
      <div className={styles.head_menu}>
        <div className={styles.menu_1}>
          <div className={styles.m_24}></div>
          <div className={styles.m_1}>Milk Chocolate</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_25}></div>
          <div className={styles.m_1}>Blueberry Cheese</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_26}></div>
          <div className={styles.m_1}>Dark Chocolate</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_27}></div>
          <div className={styles.m_1}>Roll Cake</div>
        </div>
      </div>
    </div>
  );
};
export default Menu_cake;
