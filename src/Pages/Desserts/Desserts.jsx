import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Menu_desserts from "../../components/Menu_desserts";
import Footer_section from "../../components/Footer_section";
const Desserts =()=>{
  return(
    <>
      <Cursor/>
      <div className="black-background ">
        <Header></Header>
        <About_Section text="Desserts" name="Desserts"></About_Section>
      </div>
      <Menu_desserts></Menu_desserts>
      <Footer_section></Footer_section>
    </>
  );
}
export default Desserts;