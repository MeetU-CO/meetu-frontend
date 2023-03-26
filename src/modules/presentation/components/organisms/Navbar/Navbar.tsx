import { useState } from "react";
import { useSelector } from "react-redux";

import ButtonBurger from "../../atoms/ButtonBurger/ButtonBurger";
import ButtonProfile from "../../atoms/ButtonProfile/ButtonProfile";
import MeetUIconOrange from "../../atoms/IconMeetU/IconMeetUOrange";
import LinkList from "../../atoms/LinkList/LinkList";

import NavbarOptionsContainer from "../../molecules/NavbarOptionsContainer/NavbarOptionsContainer";
import SearchBar from "../../molecules/SearchBar/SearchBar";

import { selectAuth } from "../../../../infraestructure/slices/AuthSlice";

import "./Navbar.scss";

const Navbar = () => {
  const auth = useSelector(selectAuth);

  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div className="navbar">
      <div className="navbar__navbar-container">
        <div
          className={`navbar__navbar-container__topBar ${
            focus ? "navbar__navbar-container__topBar--hide" : ""
          }`}
        >
          <ButtonBurger />
          <MeetUIconOrange />
          <SearchBar focus={focus} setFocus={setFocus} />
          <ButtonProfile />
          <NavbarOptionsContainer auth={auth} />
        </div>
        <div className="navbar__navbar-container__bottomBar">
          <nav className="navbar__navbar-container__bottomBar__nav">
            <ul className="navbar__navbar-container__bottomBar__nav__ul">
              <LinkList title="Ofertas" link="/" color="var(--orange-color)" />
              <LinkList
                title="Sobre nosotros"
                link="/"
                color="var(--orange-color)"
              />
              <LinkList
                title="Como funciona"
                link="/"
                color="var(--orange-color)"
              />
              <LinkList
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
