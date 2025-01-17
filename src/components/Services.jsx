import styles from "./Services.module.css";
import Button from "./Button";
const Services = () => {
  return (
    <div className={styles.main_services}>
      <div className={styles.head_services}>
        <div className={styles.services_1}>
          <h4 className={styles.services_h}>What We Do</h4>
          <h2 className={styles.services_h1}>Premium catering services</h2>
        </div>
      </div>
      <div className={styles.h_services}>
        <div className={styles.services_2}>
          <div className={styles.services_3}>
            <div className={styles.card_service1}></div>
            <div className={styles.card_s1}>
              <h3 className={styles.card_h1}>Wedding Event</h3>
              <p className={styles.card_p1}>
                Wedding. Why we have the concept of inviting all our relatives,
                friends and known ones? Its because, when a family celebrates an
                event means, its an occasion, when lot of people celebrates an
                event means, it turns as a feast. If there any feast occurs
                without food?? We are here to make a memorable experience for
                your guests by pampering their taste buds.
              </p>
            </div>
          </div>
          <div className={styles.services_4}>
            <div className={styles.card_service2}></div>
            <div className={styles.card_s2}>
              <h3 className={styles.card_h1}>Corporate Event</h3>
              <p className={styles.card_p1}>
                From corporate events to business occasions or milestone
                celebrations, our event catering team captures the heart of
                their audiences on their special occasions. We focus on
                delivering the customized delicacies of different types. We make
                sure all the audience feel good about the food too and that make
                your event unique.
              </p>
            </div>
          </div>
          <div className={styles.services_5}>
            <div className={styles.card_service3}></div>
            <div className={styles.card_s3}>
              <h3 className={styles.card_h1}>Birthday Party</h3>
              <p className={styles.card_p1}>
                Make every birthday a memorable one with our birthday
                photography. Whether it’s a child's first birthday or a
                milestone celebration, we capture the joy, excitement, and love
                of the day and preserve it forever. At Venus Catering Service,
                we take care of the happiness of your guests by offering them
                amazing food on behalf of you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.endbtn}>
        <a className="remove_1" href="/services">
          <Button text="View All Services" className="services_btn" />
        </a>
      </div>
    </div>
  );
};
export default Services;
