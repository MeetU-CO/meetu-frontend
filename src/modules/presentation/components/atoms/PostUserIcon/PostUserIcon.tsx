import "./PostUserIcon.scss";

interface IPostUserIcon {
  imgSrc: string;
}

const PostUserIcon = ({ imgSrc }: IPostUserIcon) => {
  return <img src={imgSrc} alt="" srcSet="" className="postUserIcon" />;
};

export default PostUserIcon;
