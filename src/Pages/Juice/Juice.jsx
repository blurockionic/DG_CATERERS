import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Menu_juice from "../../components/Menu_juice";
import Footer_section from "../../components/Footer_section";
const Juice =()=>{
  return(
    <>
      <Cursor/>
      <div className="black-background ">
        <Header></Header>
        <About_Section text="Juices" name="Juices"></About_Section>
      </div>
      <Menu_juice></Menu_juice>
      <Footer_section></Footer_section>
    </>
  );
}
export default Juice;