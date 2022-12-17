import { useSelector } from "react-redux";

import BurgerMenu from "../../atoms/BurgerMenu/BurgerMenu";
import LinkList from "../../atoms/LinkList/LinkList";
import MeetUIconOrange from "../../atoms/MeetUIcon/MeetUIconOrange";
import ProfileButton from "../../atoms/ProfileButton/ProfileButton";

import NavbarOptionsContainer from "../../molecules/NavbarOptionsContainer/NavbarOptionsContainer";
import SearhBar from "../../molecules/SearchBar/SearhBar";

import { selectAuth } from "../../../../infraestructure/slices/AuthSlice";

import "./Navbar.scss";

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
