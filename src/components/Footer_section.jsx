import styles from "./Footer_section.module.css";
import { ImFacebook } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { GrYoutube } from "react-icons/gr";
import { TbBrandWhatsapp } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import { FaArrowUp } from "react-icons/fa6";
const Footer_section = () => {
  return (
    <div className={styles.main_footer}>
      <div className={styles.head_footer}>
        <div className={styles.marquee}>
          <ul>
            <li className={styles.space}>
              <span className={styles.dotted}>•</span>Wedding{" "}
              <span className={styles.dotted}>•</span>Anniversary{" "}
              <span className={styles.dotted}>•</span>Engagement{" "}
              <span className={styles.dotted}>•</span>Seemantham{" "}
              <span className={styles.dotted}>•</span>Annaparasana{" "}
              <span className={styles.dotted}>•</span>Birthday{" "}
              <span className={styles.dotted}>•</span> House warming{" "}
              <span className={styles.dotted}>•</span>Mehndi{" "}
              <span className={styles.dotted}>•</span>Corporate{" "}
              <span className={styles.dotted}>•</span>Retirement{" "}
            </li>
            <li className={styles.space}>
              <span className={styles.dotted}>•</span>Wedding{" "}
              <span className={styles.dotted}>•</span>Anniversary{" "}
              <span className={styles.dotted}>•</span>Engagement{" "}
              <span className={styles.dotted}>•</span>Seemantham{" "}
              <span className={styles.dotted}>•</span>Annaparasana{" "}
              <span className={styles.dotted}>•</span>Birthday{" "}
              <span className={styles.dotted}>•</span> House warming{" "}
              <span className={styles.dotted}>•</span>Mehndi{" "}
              <span className={styles.dotted}>•</span>Corporate{" "}
              <span className={styles.dotted}>•</span>Retirement{" "}
            </li>
            <li className={styles.space}>
              <span className={styles.dotted}>•</span>Wedding{" "}
              <span className={styles.dotted}>•</span>Anniversary{" "}
              <span className={styles.dotted}>•</span>Engagement{" "}
              <span className={styles.dotted}>•</span>Seemantham{" "}
              <span className={styles.dotted}>•</span>Annaparasana{" "}
              <span className={styles.dotted}>•</span>Birthday{" "}
              <span className={styles.dotted}>•</span> House warming{" "}
              <span className={styles.dotted}>•</span>Mehndi{" "}
              <span className={styles.dotted}>•</span>Corporate{" "}
              <span className={styles.dotted}>•</span>Retirement{" "}
            </li>
            <li className={styles.space}>
              <span className={styles.dotted}>•</span>Wedding{" "}
              <span className={styles.dotted}>•</span>Anniversary{" "}
              <span className={styles.dotted}>•</span>Engagement{" "}
              <span className={styles.dotted}>•</span>Seemantham{" "}
              <span className={styles.dotted}>•</span>Annaparasana{" "}
              <span className={styles.dotted}>•</span>Birthday{" "}
              <span className={styles.dotted}>•</span> House warming{" "}
              <span className={styles.dotted}>•</span>Mehndi{" "}
              <span className={styles.dotted}>•</span>Corporate{" "}
              <span className={styles.dotted}>•</span>Retirement{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_1}>
        <div className={styles.footer_2}>
          <div className={styles.foot_1}>
            <div className={styles.ft_1}></div>
            <p className={styles.ft_2}>
              Let DG Caterers transform your special occasion into a masterpiece
              with our professional touch.
            </p>
            <div className={styles.ft_3}>
              <div className={styles.ft_4}>
                <a className={styles.color_4} href="#">
                  <ImFacebook />
                </a>
              </div>
              <div className={styles.ft_4}>
                <a className={styles.color_1} href="#">
                  <SiInstagram />
                </a>
              </div>
              <div className={styles.ft_4}>
                <a className={styles.color_2} href="#">
                  <GrYoutube />
                </a>
              </div>
              <div className={styles.ft_4}>
                <a className={styles.color_3} href="#">
                  <TbBrandWhatsapp />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.foot_2}>
            <div className={styles.ft_5}>
              <h2 className={styles.ft_6}>Our Services</h2>
              <ul className={styles.ft_8}>
                <li>
                  <div className={styles.ft_9}>
                    <a href="/services" className={styles.ft_7}>
                      <FaArrowRight />
                      Wedding Event
                    </a>
                  </div>
                  <div className={styles.ft_9}>
                    <a href="/services" className={styles.ft_7}>
                      <FaArrowRight /> 60th Wedding Event
                    </a>
                  </div>
                  <div className={styles.ft_9}>
                    <a href="/services" className={styles.ft_7}>
                      <FaArrowRight /> 70th Wedding Event
                    </a>
                  </div>
                  <div className={styles.ft_9}>
                    <a href="/services" className={styles.ft_7}>
                      <FaArrowRight /> 80th Wedding Event
                    </a>
                  </div>
                  <div className={styles.ft_9}>
                    <a href="/services" className={styles.ft_7}>
                      <FaArrowRight /> Engagement
                    </a>
                  </div>
                  <div className={styles.ft_9}>
                    <a href="/services" className={styles.ft_7}>
                      <FaArrowRight /> Seemanthan
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.footer_3}>
              <ul className={styles.ft_8}>
                <li>
                  <div className={styles.ft_9}>
                    <a href="/services" className={styles.ft_7}>
                      <FaArrowRight /> Annaprasana
                    </a>
                  </div>
                  <div className={styles.ft_9}>
                    <a href="/services" className={styles.ft_7}>
                      <FaArrowRight /> Birthday Party
                    </a>
                  </div>
                  <div className={styles.ft_9}>
                    <a href="/services" className={styles.ft_7}>
                      <FaArrowRight /> House Warming
                    </a>
                  </div>
                  <div className={styles.ft_9}>
                    <a href="/services" className={styles.ft_7}>
                      <FaArrowRight /> Mehndi Function
                    </a>
                  </div>
                  <div className={styles.ft_9}>
                    <a href="/services" className={styles.ft_7}>
                      <FaArrowRight /> Corporate Events
                    </a>
                  </div>
                  <div className={styles.ft_9}>
                    <a href="/services" className={styles.ft_7}>
                      <FaArrowRight /> Retirement Function
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.foot_3}>
            <h2 className={styles.ft_6}>Contact Now</h2>
            <ul className={styles.ft_8}>
              <li>
                <div className={styles.footer_4}>
                  <div className={styles.footer_5}>
                    <div className={styles.footer_7}>
                      <FaLocationDot />
                    </div>
                  </div>
                  <div className={styles.footer_6}>
                    <p>
                      No.1/379B, Kannagi Street, Jalladianpet, Pallikarani,
                      Medavakkam, Chennai - 600 100.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.foter_4}>
                  <div className={styles.foter_5}>
                    <div className={styles.footer_7}>
                      <IoCall />
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
              <li>
                <div className={styles.fter_4}>
                  <div className={styles.fter_5}>
                    <div className={styles.footer_7}>
                      <TbMailFilled />
                    </div>
                  </div>
                  <div className={styles.fter_6}>
                    <p>gurumurrthy@gmail.com</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_8}>
          <div className={styles.footer_9}>
            © 2024 <span className={styles.hd1}>DG Caterers</span> All rights
            reserved | Designed By{" "}
            <span className={styles.hd2}>Olivegrapes.</span>
          </div>
          <div className={styles.footer_10}>
            Go to Top <div className={styles.hd4}></div>
            <span className={styles.hd3}>
              <a href="#">
                <FaArrowUp />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer_section;
