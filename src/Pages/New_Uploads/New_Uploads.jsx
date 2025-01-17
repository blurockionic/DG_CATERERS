import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Menu_new_uploads from "../../components/Menu_new_uploads";
import Footer_section from "../../components/Footer_section";
const New_Uploads =()=>{
  return(
    <>
      <Cursor/>
      <div className="black-background ">
        <Header></Header>
        <About_Section text="New Uploads" name="New Uploads"></About_Section>
      </div>
      <Menu_new_uploads></Menu_new_uploads>
      <Footer_section></Footer_section>
    </>
  );
}
export default New_Uploads;