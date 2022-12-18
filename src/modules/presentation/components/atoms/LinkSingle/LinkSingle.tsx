import { Link } from "react-router-dom";

import "./LinkSingle.scss";

interface ILinkSingle {
  icon: string;
  title?: string;
  link: string;
}

const LinkSingle = ({ icon, title, link }: ILinkSingle) => {
  return (
    <Link to={link} className="linkSingle">
      <span className="linkSingle__icon material-icons">{icon}</span>
      {title ? <span className="linkSingle__title">{title}</span> : ""}
    </Link>
  );
};

export default LinkSingle;
