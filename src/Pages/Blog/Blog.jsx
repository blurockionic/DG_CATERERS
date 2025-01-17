import React from "react";
import Header from "../../components/Header";
import Cursor from "../../components/Cursor";
import About_Section from "../../components/About_section";
import Blog_services from "../../components/Blog_services";
import Footer_section from "../../components/Footer_section";
const Blog = () => {
  return (
    <>
      <Cursor />
      <div className="black-background ">
        <Header></Header>
        <About_Section text="Blog" name="Blog"></About_Section>
      </div>
      <Blog_services></Blog_services>
      <Footer_section></Footer_section>
    </>
  );
};
export default Blog;
