import React from 'react';
import "./DropdownButton.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
const DropdownButton = ({children ,open, toggle}) =>{
  return(
    <div onClick={toggle} className={`dropdown-btn ${open ? "button-open" : null}`}>
      {children}
      <span className="toggle-icon">{open ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
    </div>
  );
}
export default DropdownButton;