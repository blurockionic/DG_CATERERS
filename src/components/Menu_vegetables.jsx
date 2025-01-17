import styles from "./Menu_vegetables.module.css";
const Menu_vegetables = () => {
  return (
    <div className={styles.main_menu}>
      <div className={styles.head_menu}>
        <div className={styles.menu_1}>
          <div className={styles.m_2}></div>
          <div className={styles.m_1}>Bhindi</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_21}></div>
          <div className={styles.m_1}>Paneer Tikka Masala</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_22}></div>
          <div className={styles.m_1}>Veg. Afghani</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_23}></div>
          <div className={styles.m_1}>Lasuni Aloo</div>
        </div>
      </div>
      <div className={styles.head_menu}>
        <div className={styles.menu_1}>
          <div className={styles.m_24}></div>
          <div className={styles.m_1}>Veg. Makhmali</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_25}></div>
          <div className={styles.m_1}>Palak Paneer</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_26}></div>
          <div className={styles.m_1}>Diwani Handi</div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_27}></div>
          <div className={styles.m_1}>Adhrakhi Chhole</div>
        </div>
      </div>
    </div>
  );
};
export default Menu_vegetables;
