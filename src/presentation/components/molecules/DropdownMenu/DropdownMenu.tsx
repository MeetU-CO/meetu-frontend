import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import LinkList from "../../atoms/LinkList/LinkList";
import LinkStatic from "../../atoms/LinkStatic/LinkStatic";

import { removeCookie } from "../../../../modules/cookie/application/removeCookie";

import { logout } from "../../../../modules/auth/infrastructure/slices/AuthSlice";
import { createUniversalCookieRepository } from "../../../../modules/cookie/infrastructure/UniversalCookieRepository";
import "./DropdownMenu.scss";

interface IDropdownMenu {
  children: JSX.Element | JSX.Element[];
  profileID: string;
}

const DropdownMenu = ({ children, profileID }: IDropdownMenu) => {
  const cookieRepository = createUniversalCookieRepository();

  const [isActive, setIsActive] = useState<boolean>(false);
  const ctn: any = useRef();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    removeCookie(cookieRepository, "auth");
    window.location.reload();
  };

  const blurMenu = (e: any) => {
    requestAnimationFrame(() => {
      if (!ctn.current.contains(document.activeElement)) {
        setIsActive(false);
      }
    });
  };

  document.addEventListener("click", blurMenu);

  return (
    <div className="dropdownMenu" ref={ctn}>
      <button
        className="dropdownMenu__toggleButton"
        onClick={() => setIsActive(!isActive)}
      >
        {children}
      </button>
      <div
        className={
          isActive ? "dropdownMenu__options" : "dropdownMenu__options--disabled"
        }
      >
        <div onClick={() => setIsActive(false)}>
          <LinkList
            link={`/perfil/${profileID}`}
            title={"Ver perfil"}
            color={"var(--orange-color)"}
          />
        </div>

        <div onClick={handleLogout} style={{ width: "100%" }}>
          <LinkStatic title={"Cerrar Sesión"} color={"var(--orange-color)"} />
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
