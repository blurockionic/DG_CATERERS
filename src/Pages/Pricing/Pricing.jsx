import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Price from "../../components/Price";
import Footer_section from "../../components/Footer_section";
const Pricing =()=>{
  return(
    <>
      <Cursor/>
      <div className="black-background ">
        <Header></Header>
        <About_Section text="Pricing" name="Pricing"></About_Section>
      </div>
      <Price></Price>
      <Footer_section></Footer_section>
    </>
  );
}
export default Pricing;