import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Menu_sweets from "../../components/Menu_sweets";
import Footer_section from "../../components/Footer_section";
const Sweets =()=>{
  return(
    <>
      <Cursor/>
      <div className="black-background ">
        <Header></Header>
        <About_Section text="Sweets" name="Sweets"></About_Section>
      </div>
      <Menu_sweets></Menu_sweets>
      <Footer_section></Footer_section>
    </>
  );
}
export default Sweets;