import { IimageAbsolute } from "./IimageAbsolute";
import "./ImageAbsolute.scss";

const ImageAbsolute = ({
  imgUrl,
  width,
  top,
  right,
  bottom,
  left,
}: IimageAbsolute) => {
  return (
    <img
      src={imgUrl}
      alt=""
      className="imageAbsolute"
      style={{ width, top, right, bottom, left }}
    />
  );
};

export default ImageAbsolute;
