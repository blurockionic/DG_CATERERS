import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Menu_main from "../../components/Menu_main";
import Footer_section from "../../components/Footer_section";
const Menu =()=>{
  return(
    <>
      <Cursor/>
      <div className="black-background ">
        <Header></Header>
        <About_Section text="Menu" name="Menu"></About_Section>
      </div>
      <Menu_main></Menu_main>
      <Footer_section></Footer_section>
    </>
  );
}
export default Menu;