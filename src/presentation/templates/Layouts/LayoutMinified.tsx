import Navbar from "../../components/organisms/Navbar/Navbar";

import "./Layout.scss";

const LayoutMinified = (Component: any) => {
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
};
export default LayoutMinified;
