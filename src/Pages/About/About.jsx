import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import About_article from "../../components/About_article";
import About_about from "../../components/About_about";
import Article from "../../components/Article";
import About_services from "../../components/About_services";
import About_company from "../../components/About_company";
import Pricing from "../../components/Pricing";
import Choice from "../../components/Choice";
import Footer_section from "../../components/Footer_section";

const  About=()=>{
  return(
    <>
      <Cursor/>
      <div className="black-background ">
        <Header></Header>
        <About_Section text="About Us" name="About Us"></About_Section>
      </div>
      <About_article></About_article>
      <About_company></About_company>
      <About_services></About_services>
      <About_about></About_about>
      <Choice></Choice>
      <Footer_section></Footer_section>
    </>
  );
}
export default About;