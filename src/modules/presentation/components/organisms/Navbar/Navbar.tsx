import React from "react";
import "./Navbar.scss";
import MenuLink from "../../atoms/MenuLink/MenuLink";
import MeetUIconOrange from "../../atoms/MeetUIcon/MeetUIconOrange";
import SearhBar from "../../molecules/SearchBar/SearhBar";
import NavbarOptionsContainer from "../../molecules/NavbarOptionsContainer/NavbarOptionsContainer";
import BurgerMenu from "../../atoms/BurgerMenu/BurgerMenu";
import ProfileButton from "../../atoms/ProfileButton/ProfileButton";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../../infraestructure/slices/AuthSlice";

const Navbar = () => {
  const auth = useSelector(selectAuth);

  return (
    <div className="navbar">
      <div className="navbar__navbar-container">
        <div className="navbar__navbar-container__topBar">
          <BurgerMenu />
          <MeetUIconOrange />
          <SearhBar />
          <ProfileButton />
          <NavbarOptionsContainer auth={auth.logged} />
        </div>
        <div className="navbar__navbar-container__bottomBar">
          <nav className="navbar__navbar-container__bottomBar__nav">
            <ul className="navbar__navbar-container__bottomBar__nav__ul">
              <MenuLink title="Ofertas" link="/" color="var(--orange-color)" />
              <MenuLink
                title="Sobre nosotros"
                link="/"
                color="var(--orange-color)"
              />
              <MenuLink
                title="Como funciona"
                link="/"
                color="var(--orange-color)"
              />
              <MenuLink
                title="Contactanos"
                link="/"
                color="var(--orange-color)"
              />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
