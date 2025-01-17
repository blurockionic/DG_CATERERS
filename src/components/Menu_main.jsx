import styles from "./Menu_main.module.css";
import {Link} from "react-router-dom";
const Menu_main = () => {
  return (
    <div className={styles.main_menu}>
      <div className={styles.head_menu}>
        <div className={styles.menu_1}>
          <div className={styles.m_2}></div>
          <div className={styles.m_1}>
            <Link to="/new_uploads" className={styles.item_1}>
              New Uploads
            </Link>
          </div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_21}></div>
          <div className={styles.m_1}>
            <Link to="/juice" className={styles.item_1}>
              Juice
            </Link>
          </div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_22}></div>
          <div className={styles.m_1}>
            <Link to="/mocktail" className={styles.item_1}>
              Mocktail
            </Link>
          </div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_23}></div>
          <div className={styles.m_1}>
            <Link to="/bitings" className={styles.item_1}>
              Bitings
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.head_menu}>
        <div className={styles.menu_1}>
          <div className={styles.m_24}></div>
          <div className={styles.m_1}>
            <Link to="/sweets" className={styles.item_1}>
              Sweets
            </Link>
          </div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_25}></div>
          <div className={styles.m_1}>
            <Link to="/vegetables" className={styles.item_1}>
              Vegetables
            </Link>
          </div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_26}></div>
          <div className={styles.m_1}>
            <Link to="/breads" className={styles.item_1}>
              Indians Bread
            </Link>
          </div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_27}></div>
          <div className={styles.m_1}>
            <Link to="/dal" className={styles.item_1}>
              Dal rice
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.head_menu}>
        <div className={styles.menu_1}>
          <div className={styles.m_32}></div>
          <div className={styles.m_1}>
            <Link to="/ice_cream" className={styles.item_1}>
              Ice Cream
            </Link>
          </div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_33}></div>
          <div className={styles.m_1}>
            <Link to="/cake" className={styles.item_1}>
            Cake And Pastries
            </Link>
          </div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_34}></div>
          <div className={styles.m_1}>
            <Link to="/desserts" className={styles.item_1}>
            Desserts
            </Link>
          </div>
        </div>
        <div className={styles.menu_1}>
          <div className={styles.m_35}></div>
          <div className={styles.m_1}>Kadai Milk</div>
        </div>
      </div>
    </div>
    
  );
};
export default Menu_main;