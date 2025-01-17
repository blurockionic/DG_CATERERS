import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Gallery_serve from "../../components/Gallery_serve";
import Footer_section from "../../components/Footer_section";
const Gallery =()=>{
  return(
    <>
      <Cursor/>
      <div className="black-background ">
        <Header></Header>
        <About_Section text="Gallery" name="Gallery"></About_Section>
      </div>
      <Gallery_serve></Gallery_serve>
      <Footer_section></Footer_section>
    </>
  );
}
export default Gallery;