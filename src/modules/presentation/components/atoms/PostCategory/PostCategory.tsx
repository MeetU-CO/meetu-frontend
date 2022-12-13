import { IOfferDetails } from "../../molecules/OfferDetails/IOfferDetails";
import "./PostCategory.scss";

const PostCategory = ({ categoryName }: IOfferDetails) => {
  return <p className="postCategory">{categoryName}</p>;
};

export default PostCategory;
