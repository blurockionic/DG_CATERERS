import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { MdRoundaboutLeft } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { IoIosContacts } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { MdRestaurantMenu } from "react-icons/md";
import { MdPriceChange } from "react-icons/md";
import "./Navbar.css";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className="menu"
      onClick={() => {
        setMenuOpen(!menuOpen);
      }}
    >
      <div className="main_menu"><TfiMenu /></div>
      <nav className="nav-link">
        <ul className={menuOpen ? "open" : ""}>
          <li className="nav">
            <Link to="/" className="link-secondary text-black navitems">
              <pre className="space"><FaHome /> Home</pre>
            </Link>
          </li>
          <li className="nav">
            <Link to="/about" className="link-secondary text-black navitems">
            <pre className="space"><MdRoundaboutLeft /> About</pre>
            </Link>
          </li>
          <li className="nav">
            <Link to="/services" className="link-secondary text-black navitems">
            <pre className="service_1"><MdOutlineMiscellaneousServices /> Services</pre>
            </Link>
          </li>
          <li className="nav">
            <Link to="/gallery" className="link-secondary text-black navitems">
            <pre className="space"><GrGallery /> Gallery</pre>
            </Link>
          </li>
          <li className="nav">
            <Link to="/blog" className="link-secondary text-black navitems">
            <pre className="space"><LiaBlogSolid /> Blogs</pre>
            </Link>
          </li>
          <li className="nav">
            <Link to="/contact" className="link-secondary text-black navitems">
            <pre className="space"><IoIosContacts /> Contact</pre>
            </Link>
          </li>
          <li className="nav">
            <Link to="/menu" className="link-secondary text-black navitems">
            <pre className="space"><MdRestaurantMenu /> Menu</pre>
            </Link>
          </li>
          <li className="nav">
            <Link to="/pricing" className="link-secondary text-black navitems">
            <pre className="space"><MdPriceChange /> Pricing</pre>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
