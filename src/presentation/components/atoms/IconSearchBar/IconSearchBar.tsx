import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

import "./IconSearchBar.scss";

interface IiconSearchBar {
  searchParameter: string;
  setSearchParameter: Dispatch<SetStateAction<string>>;
}

const IconSearchBar = ({
  searchParameter,
  setSearchParameter,
}: IiconSearchBar) => {
  return (
    <div className="iconSearchBar">
      <div className="iconSearchBar__divisor-line"></div>
      <Link
        className="iconSearchBar__icon"
        to={`/busqueda/${searchParameter}`}
        onClick={() => setSearchParameter("")}
      >
        <span className="material-icons">search</span>
      </Link>
    </div>
  );
};

export default IconSearchBar;
