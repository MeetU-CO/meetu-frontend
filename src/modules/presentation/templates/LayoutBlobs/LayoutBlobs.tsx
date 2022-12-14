import "./LayoutBlobs.scss";

import Blob1 from "../../assets/Blobs/Blob1.svg";
import Blob2 from "../../assets/Blobs/Blob2.svg";

interface ILayoutBlobs {
  children: JSX.Element | JSX.Element[];
}

const LayoutBlobs = ({ children }: ILayoutBlobs) => {
  return (
    <>
      <div className="layout-blobs">
        <img id="blob1" src={Blob1} alt="" />
        <img id="blob2" src={Blob2} alt="" />
        {children}
      </div>
    </>
  );
};

export default LayoutBlobs;
