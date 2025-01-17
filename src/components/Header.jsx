import image from "../assets/images/catering_logo.jpg";
import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import Button from "./Button";
import {Navbar} from "./Navbar/Navbar";

const Header = () => {

  return (
    <div className={styles.mainhead}>
      <div className={styles.navhead}>
        <div className={styles.logo}>
          <img src={image} className={styles.logo_img} alt="logo" />
        </div>
        <Navbar></Navbar>
        <div className="navbox">
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="link-secondary text-black navitem">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link-secondary text-black navitem">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="link-secondary text-black navitem">
                Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="link-secondary text-black navitem">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/blog" className="link-secondary text-black navitem">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-secondary text-black navitem">
                Contact
              </Link>
            </li>
            <li>
            <Link to="/menu" className="link-secondary text-black navitem">
                Menu
            </Link>
            </li>
            <li>
            <Link to="/pricing" className="link-secondary text-black navitem">
                Pricing
            </Link>
            </li>
          </ul>
        </div>
        <Button text="Book now"/>
      </div>
    </div>
  );
};
export default Header;
