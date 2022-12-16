import { IimageAbsolute } from "./IimageAbsolute";
import "./ImageAbsolute.scss";

const ImageAbsolute = ({
  url,
  width,
  top,
  right,
  bottom,
  left,
}: IimageAbsolute) => {
  return (
    <img
      src={url}
      alt=""
      className="imageAbsolute"
      style={{ width, top, right, bottom, left }}
    />
  );
};

export default ImageAbsolute;
