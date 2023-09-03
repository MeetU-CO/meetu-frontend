import Footer from "../../components/organisms/Footer/Footer";
import Navbar from "../../components/organisms/Navbar/Navbar";

import "./Layout.scss";

const LayoutFull = (Component: any) => {
  return (
    <>
      <Navbar />
      <Component />
      <Footer />
    </>
  );
};
export default LayoutFull;
