import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Menu_cake from "../../components/Menu_cake";
import Footer_section from "../../components/Footer_section";
const Cake =()=>{
  return(
    <>
      <Cursor/>
      <div className="black-background ">
        <Header></Header>
        <About_Section text="Cake And Pastries" name="Cake And Pastries"></About_Section>
      </div>
      <Menu_cake></Menu_cake>
      <Footer_section></Footer_section>
    </>
  );
}
export default Cake;