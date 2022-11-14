import React from "react";
import { Link } from "react-router-dom";
import "./NavbarOption.scss";

interface INavbarOption {
  icon: string;
  title?: string;
  link: string;
}

const NavbarOption = ({ icon, title, link }: INavbarOption) => {
  return (
    <Link to={link} className="navbarOption">
      <span className="navbarOption__icon material-icons">{icon}</span>
      {title ? <span className="navbarOption__title">{title}</span> : ""}
    </Link>
  );
};

export default NavbarOption;
