import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Menu_vegetables from "../../components/Menu_vegetables";
import Footer_section from "../../components/Footer_section";
const Vegetables =()=>{
  return(
    <>
      <Cursor/>
      <div className="black-background ">
        <Header></Header>
        <About_Section text="Vegetables" name="Vegetables"></About_Section>
      </div>
      <Menu_vegetables></Menu_vegetables>
      <Footer_section></Footer_section>
    </>
  );
}
export default Vegetables;