import "./ImageIconCircle.scss";

interface IImageIconCircle {
  imgSrc: string;
}

const ImageIconCircle = ({ imgSrc }: IImageIconCircle) => {
  return <img src={imgSrc} alt="" srcSet="" className="imageIconCircle" />;
};

export default ImageIconCircle;
