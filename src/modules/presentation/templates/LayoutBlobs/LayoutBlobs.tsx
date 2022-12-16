import { IBlob } from "./IBlob";

import "./LayoutBlobs.scss";

interface ILayoutBlobs {
  blobs: IBlob[];
  maxWidth: string;
  direction: "row" | "column";
  children: JSX.Element | JSX.Element[];
}

const LayoutBlobs = ({
  blobs,
  maxWidth,
  direction,
  children,
}: ILayoutBlobs) => {
  return (
    <>
      <div
        className="layout-blobs"
        style={{ maxWidth: maxWidth, flexDirection: direction }}
      >
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
        {children}
      </div>
    </>
  );
};

export default LayoutBlobs;
