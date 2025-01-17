import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Menu_mocktail from "../../components/Menu_mocktail";
import Footer_section from "../../components/Footer_section";
const Mocktail =()=>{
  return(
    <>
      <Cursor/>
      <div className="black-background ">
        <Header></Header>
        <About_Section text="Mocktail" name="Mocktail"></About_Section>
      </div>
      <Menu_mocktail></Menu_mocktail>
      <Footer_section></Footer_section>
    </>
  );
}
export default Mocktail;