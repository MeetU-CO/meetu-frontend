import React from "react";
import NavbarOption from "../../atoms/NavbarOption/NavbarOption";
import "./NavbarOptionsContainer.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../../../infraestructure/slices/AuthSlice";

interface INavbarOptionsContainer {
  auth: boolean;
}

const NavbarOptionsContainer = ({ auth }: INavbarOptionsContainer) => {
  const dispatch = useDispatch();

  const handleLogout = (values: any) => {
    dispatch(logout());
  };

  if (!auth) {
    return (
      <div className="navbarOptions-container">
        <NavbarOption icon="" title="Iniciar sesión" link="/login" />
        <NavbarOption icon="" title="Registrarse" link="/signup" />
      </div>
    );
  }

  return (
    <div className="navbarOptions-container">
      <div onClick={handleLogout}>
        <NavbarOption icon="notifications" link="" />
      </div>
      <NavbarOption
        icon="account_circle"
        title="mi perfil"
        link="/perfil/123123"
      />
    </div>
  );
};

export default NavbarOptionsContainer;
