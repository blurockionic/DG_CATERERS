import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Services_serve from "../../components/Services_serve";
import Footer_section from "../../components/Footer_section";
const Services =()=>{
  return(
    <>
      <Cursor/>
      <div className="black-background ">
        <Header></Header>
        <About_Section text="Services" name="Services"></About_Section>
      </div>
      <Services_serve></Services_serve>
      <Footer_section></Footer_section>
    </>
  );
}
export default Services;