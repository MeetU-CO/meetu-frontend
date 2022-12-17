import "./ImageClickable.scss";

interface IimageClickable {
  link: string;
  url: string;
  width: string;
}

const ImageClickable = ({ link, url, width }: IimageClickable) => {
  return (
    <a href={link} target="_blank" className="clickableImage">
      <img src={url} alt="" style={{ width }} />
    </a>
  );
};

export default ImageClickable;
