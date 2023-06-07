import LinkSingle from "../../atoms/LinkSingle/LinkSingle";
import LinkStatic from "../../atoms/LinkStatic/LinkStatic";

import { Token } from "../../../../modules/token/domain/Token";

import { decodeToken } from "../../../../modules/token/application/decodeToken";

import { ReactJWTToken } from "../../../../modules/token/infrastructure/ReactJWTToken";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./NavbarOptionsContainer.scss";

interface INavbarOptionsContainer {
  // TODO create DTO
  auth: any;
}

const NavbarOptionsContainer = ({ auth }: INavbarOptionsContainer) => {
  const tokenRepository = ReactJWTToken();

  const authData: Token = decodeToken(tokenRepository, auth.data);

  if (!auth.logged) {
    return (
      <div className="navbarOptions-container">
        <LinkSingle icon="" title="Iniciar sesión" link="/login" />
        <LinkSingle icon="" title="Registrarse" link="/signup" />
      </div>
    );
  }

  return (
    <div className="navbarOptions-container--logged">
      <LinkStatic icon="notifications" color={"var(--orange-color)"} />
      <DropdownMenu profileID={auth.data}>
        <LinkStatic
          icon="account_circle"
          title={authData ? authData.name : ""}
          color={"var(--orange-color)"}
        />
      </DropdownMenu>
    </div>
  );
};

export default NavbarOptionsContainer;