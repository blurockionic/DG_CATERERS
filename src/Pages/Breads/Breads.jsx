import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Menu_breads from "../../components/Menu_breads";
import Footer_section from "../../components/Footer_section";
const Breads =()=>{
  return(
    <>
      <Cursor/>
      <div className="black-background ">
        <Header></Header>
        <About_Section text="Breads" name="Breads"></About_Section>
      </div>
      <Menu_breads></Menu_breads>
      <Footer_section></Footer_section>
    </>
  );
}
export default Breads;