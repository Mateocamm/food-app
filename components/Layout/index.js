import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function index(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default index;
