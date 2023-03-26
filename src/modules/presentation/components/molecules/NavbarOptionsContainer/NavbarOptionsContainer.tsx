import LinkSingle from "../../atoms/LinkSingle/LinkSingle";
import LinkStatic from "../../atoms/LinkStatic/LinkStatic";

import { Token } from "../../../../domain/entity/Token.entity";

import { tokenHandler } from "../../../../application/services/TokenHandler.service";

import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./NavbarOptionsContainer.scss";

interface INavbarOptionsContainer {
  // TODO create DTO
  auth: any;
}

const NavbarOptionsContainer = ({ auth }: INavbarOptionsContainer) => {
  const authData: Token = tokenHandler(auth.data);

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
