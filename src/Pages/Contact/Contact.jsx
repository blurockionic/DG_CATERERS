import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Contact_section from "../../components/Contact_section";
import Footer_section from "../../components/Footer_section";
const Contact = () => {
  return (
    <>
      <Cursor />
      <div className="black-background ">
        <Header></Header>
        <About_Section text="Contact" name="Contact Us"></About_Section>
      </div>
      <Contact_section></Contact_section>
      <Footer_section></Footer_section>
    </>
  );
};
export default Contact;
