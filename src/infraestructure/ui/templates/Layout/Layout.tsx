import React from "react";
import Footer from "../../components/organisms/Footer/Footer";
import Navbar from "../../components/organisms/Navbar/Navbar";
import "./Layout.scss";

interface ILayout {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
