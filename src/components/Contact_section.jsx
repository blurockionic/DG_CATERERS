import styles from "./Contact_section.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import Button from "./Button";
const Contact_section = () => {
  return (
    <>
      <body>
        <div className={styles.main_contact}>
          <div className={styles.head_contact}>
            <div className={styles.contact_1}>
              <h3 className={styles.contact_h1}>Hello Everyone</h3>
              <h2 className={styles.contact_h2}>
                We prepare food just like your home in large quantities. Thats
                it. Do book us and relax.
              </h2>
            </div>
            <div className={styles.contact_2}>
              <p className={styles.contact_p1}>
                We offer personalized catering solutions for all events,
                ensuring every detail is perfect. Contact us for exceptional
                service and exquisite culinary experiences tailored to your
                needs.Your satisfaction is our top priority.
              </p>
              <Button text="Book now" />
            </div>
          </div>
        </div>
        <div className={styles.contact_3}>
          <div className={styles.contact_5}>
            <div className={styles.contact_4}>
              <h3 className={styles.contact_h3}>Contact Us</h3>
              <div className={styles.contact_h4}>Get In Touch</div>
            </div>
            <div className={styles.contact_6}>
              <div className={styles.contact_61}>
                <p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54776.13337418095!2d75.81547368284248!3d30.900412322217893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1735883273400!5m2!1sen!2sin"
                    width="866.66"
                    height="337.59"
                    style={{ border: "0", borderRadius: "25px" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </p>
              </div>
              <div className={styles.contact_62}>
                <div className={styles.contact_63}>
                  <h3 className={styles.contact_64}>Contact Details</h3>
                  <ul className={styles.ft_8}>
                    <li>
                      <div className={styles.footer_4}>
                        <div className={styles.footer_5}>
                          <div className={styles.footer_7}>
                            <IoLocationOutline />
                          </div>
                        </div>
                        <div className={styles.footer_6}>
                          <p>
                            No.1/379B, Kannagi Street, Jalladianpet,
                            Pallikarani, Medavakkam, Chennai - 600 100.
                          </p>
                        </div>
                      </div>
                    </li>
                    <div className={styles.line}></div>
                    <li>
                      <div className={styles.fter_4}>
                        <div className={styles.fter_5}>
                          <div className={styles.footer_8}>
                            <BiPhoneCall />
                          </div>
                        </div>
                        <div className={styles.fter_6}>
                          <p>gurumurrthy@gmail.com</p>
                        </div>
                      </div>
                    </li>
                    <div className={styles.line1}></div>
                    <li>
                      <div className={styles.foter_4}>
                        <div className={styles.foter_5}>
                          <div className={styles.footer_9}>
                            <TfiEmail />
                          </div>
                        </div>
                        <div className={styles.foter_6}>
                          <p>
                            <div>+91 98409 35064</div>
                            +91 91713 63371
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
export default Contact_section;
