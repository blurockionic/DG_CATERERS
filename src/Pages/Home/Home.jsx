import React from "react";
import Header from "../../components/Header";
import Section from "../../components/Section";
import Article from "../../components/Article";
import Services from "../../components/Services";
import Pricing from "../../components/Pricing";
import About from "../../components/About";
import Choice from "../../components/Choice";
import Cursor from "../../components/Cursor";
import Footer_section from "../../components/Footer_section";
const Home =()=>{
  return(
    <>
      <Cursor/>
      <div className="black-blur">
        <Header></Header>
        <Section></Section>
      </div>
      <Article></Article>
      <Services></Services>
      <Pricing></Pricing>
      <About></About>
      <Choice></Choice>
      <Footer_section></Footer_section>
    </>
  );
}
export default Home;