import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Menu_dal from "../../components/Menu_dal";
import Footer_section from "../../components/Footer_section";
const Dal =()=>{
  return(
    <>
      <Cursor/>
      <div className="black-background ">
        <Header></Header>
        <About_Section text="Dal rice" name="Dal rice"></About_Section>
      </div>
      <Menu_dal></Menu_dal>
      <Footer_section></Footer_section>
    </>
  );
}
export default Dal;