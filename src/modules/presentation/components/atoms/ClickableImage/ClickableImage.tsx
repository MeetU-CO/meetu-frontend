import "./ClickableImage.scss";

interface IClickableImage {
  link: string;
  imageUrl: string;
  width: string;
}

const ClickableImage = ({ link, imageUrl, width }: IClickableImage) => {
  return (
    <a href={link} target="_blank" className="clickableImage">
      <img src={imageUrl} alt="" style={{ width }} />
    </a>
  );
};

export default ClickableImage;
