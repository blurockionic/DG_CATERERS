import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Menu_bitings from "../../components/Menu_bitings";
import Footer_section from "../../components/Footer_section";
const Bitings =()=>{
  return(
    <>
      <Cursor/>
      <div className="black-background ">
        <Header></Header>
        <About_Section text="Bitings" name="Bitings"></About_Section>
      </div>
      <Menu_bitings></Menu_bitings>
      <Footer_section></Footer_section>
    </>
  );
}
export default Bitings;