import { useDispatch } from "react-redux";

import LinkSingle from "../../atoms/LinkSingle/LinkSingle";

import { deleteCookie } from "../../../../application/services/Cookie.service";

import { logout } from "../../../../infraestructure/slices/AuthSlice";

import "./NavbarOptionsContainer.scss";

interface INavbarOptionsContainer {
  auth: boolean;
}

const NavbarOptionsContainer = ({ auth }: INavbarOptionsContainer) => {
  const dispatch = useDispatch();

  const handleLogout = (values: any) => {
    dispatch(logout());
    deleteCookie("auth");
  };

  if (!auth) {
    return (
      <div className="navbarOptions-container">
        <LinkSingle icon="" title="Iniciar sesión" link="/login" />
        <LinkSingle icon="" title="Registrarse" link="/signup" />
      </div>
    );
  }

  return (
    <div className="navbarOptions-container">
      <div onClick={handleLogout}>
        <LinkSingle icon="notifications" link="" />
      </div>
      <LinkSingle
        icon="account_circle"
        title="mi perfil"
        link="/perfil/123123"
      />
    </div>
  );
};

export default NavbarOptionsContainer;
