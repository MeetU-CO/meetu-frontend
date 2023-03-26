import { Link } from "react-router-dom";

import "./LinkList.scss";

interface ILinkList {
  title: string;
  link: string;
  color: string;
}

const LinkList = ({ title, link, color }: ILinkList) => {
  return (
    <li className="linkList" style={{ color: color }}>
      <Link className="linkList__link" to={link} style={{ color: color }}>
        {title}
      </Link>
    </li>
  );
};

export default LinkList;
