import "./PostDescription.scss";

interface IPostDescription {
  text: string;
}

const PostDescription = ({ text }: IPostDescription) => {
  return <p className="postDescription">{text}</p>;
};

export default PostDescription;
