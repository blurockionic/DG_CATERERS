import styles from "./Price.module.css";
import { MdArrowCircleRight } from "react-icons/md";
import Button from "./Button";
const Price = () => {
  return (
    <div className={styles.main_price}>
      <div className={styles.head_price}>
        <div className={styles.price_1}> Latest Events</div>
        <div className={styles.pricing_1}>
          <div className={styles.pricing}>
            <div className={styles.price_2}>
              <span className={styles.serves}>
                <MdArrowCircleRight /> Services
              </span>
              Wedding Event
              <div className={styles.p_2}>$600</div>
            </div>
            <div className={styles.price_2}>
              <span className={styles.serves}>
                <MdArrowCircleRight /> Services
              </span>
              Engagement
              <div className={styles.p_2}>$600</div>
            </div>
            <div className={styles.price_2}>
              <span className={styles.serves}>
                <MdArrowCircleRight /> Services
              </span>
              Seemantham
              <div className={styles.p_2}>$600</div>
            </div>
            <div className={styles.price_2}>
              <span className={styles.serves}>
                <MdArrowCircleRight /> Services
              </span>
              Annaprasana
              <div className={styles.p_2}>$600</div>
            </div>
            <div className={styles.price_2}>
              <span className={styles.serves}>
                <MdArrowCircleRight /> Services
              </span>
              Birthday Party
              <div className={styles.p_2}>$600</div>
            </div>
            <div className={styles.price_2}>
              <span className={styles.serves}>
                <MdArrowCircleRight /> Services
              </span>
              House Warming
              <div className={styles.p_2}>$600</div>
            </div>
            <div className={styles.price_2}>
              <span className={styles.serves}>
                <MdArrowCircleRight /> Services
              </span>
              Mehndi Function
              <div className={styles.p_2}>$600</div>
            </div>
            <div className={styles.price_2}>
              <span className={styles.serves}>
                <MdArrowCircleRight /> Services
              </span>
              Corporate Event
              <div className={styles.p_2}>$600</div>
            </div>
            <div className={styles.price_2}>
              <span className={styles.serves}>
                <MdArrowCircleRight /> Services
              </span>
              Retirement Function
              <div className={styles.p_2}>$600</div>
            </div>
          </div>
        </div>
        <div className={styles.button_price}>
          <a className="remove_1" href="/contact">
          <Button
            text="Contact"
            className="contact_price"
            arrowContainerClass="arrow_btn"
          />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Price;
