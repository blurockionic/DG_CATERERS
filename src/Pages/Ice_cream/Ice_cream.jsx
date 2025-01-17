import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Menu_ice_cream from "../../components/Menu_ice_cream";
import Footer_section from "../../components/Footer_section";
const Ice_cream =()=>{
  return(
    <>
      <Cursor/>
      <div className="black-background ">
        <Header></Header>
        <About_Section text="Ice Cream" name="Ice Cream"></About_Section>
      </div>
      <Menu_ice_cream></Menu_ice_cream>
      <Footer_section></Footer_section>
    </>
  );
}
export default Ice_cream;