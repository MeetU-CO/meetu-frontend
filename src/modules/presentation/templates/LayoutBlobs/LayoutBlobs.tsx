import { IBlob } from "./IBlob";

import "./LayoutBlobs.scss";

interface ILayoutBlobs {
  blobs: IBlob[];
  maxWidth: string;
  children: JSX.Element | JSX.Element[];
}

const LayoutBlobs = ({ blobs, maxWidth, children }: ILayoutBlobs) => {
  return (
    <>
      <div className="layout-blobs" style={{ maxWidth: maxWidth }}>
        {blobs.map((blob, index) => (
          <img
            src={blob.src}
            id={blob.id}
            alt=""
            style={{
              width: blob.width,
              top: blob.top,
              right: blob.right,
              bottom: blob.bottom,
              left: blob.left,
              zIndex: blob.zIndex,
              position: "absolute",
            }}
            key={index}
          />
        ))}
        {/* <img id="blob1" src={Blob1} alt="" />
        <img id="blob2" src={Blob2} alt="" /> */}
        {children}
      </div>
    </>
  );
};

export default LayoutBlobs;
