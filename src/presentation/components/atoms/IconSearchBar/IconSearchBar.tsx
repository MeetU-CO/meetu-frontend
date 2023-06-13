import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

import { SearchBarMode } from "../../molecules/SearchBar/SearchBarMode";

import "./IconSearchBar.scss";

interface IiconSearchBar {
  searchParameter: string;
  setSearchParameter: Dispatch<SetStateAction<string>>;
  mode: SearchBarMode;
}

const IconSearchBar = ({
  searchParameter,
  setSearchParameter,
  mode,
}: IiconSearchBar) => {
  return (
    <div className="iconSearchBar" style={{ backgroundColor: mode }}>
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
