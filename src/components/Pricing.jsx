import styles from "./Pricing.module.css";
const Pricing = () => {
  return (
    <div className={styles.main_Pricing}>
      <div className={styles.head_Pricing}>
        <div className={styles.Pricing1}>
          <div className={styles.head_p1}>
            <h5>Why Choose us</h5>
          </div>
          <div className={styles.head_p2}>
            <div className={styles.head_p3}>
              <div className={styles.head_p4}>Leave Your Guests Speechless With</div>
              <div className={styles.head_p5}>Our Fabulous Food!</div>
            </div>
          </div>
        </div>
        <div className={styles.Pricing2}>
          <div className={styles.pr1}>
            <div className={styles.price_1}>
              <div className={styles.pc_1}></div>
            </div>
            <h3 className={styles.hp_1}>Authentic Taste</h3>
            <div className={styles.mp_1}>
              <div className={styles.hp_2}>Enjoy our traditional recipes,</div>
              <div className={styles.hp_3}>inspired by rich culinary heritage.</div>
            </div>
          </div>
          <div className={styles.pr1}>
          <div className={styles.price_1}>
            <div className={styles.pc_2}></div>
            </div>
            <h3 className={styles.hp_1}>Service Excellence</h3>
            <div className={styles.mp_1}>
              <div className={styles.hp_2}>Outstanding service and</div>
              <div className={styles.hp_3}>unforgettable experiences.</div>
            </div>
          </div>
          <div className={styles.pr1}>
          <div className={styles.price_1}>
            <div className={styles.pc_3}></div>
            </div>
            <h3 className={styles.hp_1}>Best Quality</h3>
            <div className={styles.mp_1}>
              <div className={styles.hp_31}>Top quality standards, excellence</div>
              <div className={styles.hp_32}>in every bite.</div>
            </div>
          </div>
          <div className={styles.pr1}>
          <div className={styles.price_1}>
            <div className={styles.pc_4}></div>
            </div>
            <h3 className={styles.hp_1}>Heritage</h3>
            <div className={styles.mp_1}>
              <div className={styles.hp_31}>DG caterers blends food and</div>
              <div className={styles.hp_3}>heart, rooted in family traditions.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;