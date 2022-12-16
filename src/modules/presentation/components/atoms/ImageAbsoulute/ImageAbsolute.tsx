import { IimageAbsolute } from "./IimageAbsolute";
import "./ImageAbsolute.scss";

const ImageAbsolute = ({
  url,
  width,
  top,
  right,
  bottom,
  left,
  ...rest
}: IimageAbsolute) => {
  return (
    <img
      src={url}
      alt=""
      className="imageAbsolute"
      style={{ width, top, right, bottom, left, ...rest }}
    />
  );
};

export default ImageAbsolute;
