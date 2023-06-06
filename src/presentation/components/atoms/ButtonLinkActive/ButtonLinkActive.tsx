import { Link } from "react-router-dom";

import "./ButtonLinkActive.scss";

interface IButtonLinkActive {
  link: string;
  text: string;
}

const ButtonLinkActive = ({ link, text }: IButtonLinkActive) => {
  return (
    <Link to={link} className="buttonLinkActive">
      {text}
    </Link>
  );
};

export default ButtonLinkActive;
