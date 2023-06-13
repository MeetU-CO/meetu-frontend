import { Dispatch, SetStateAction } from "react";

import { SearchBarMode } from "../../molecules/SearchBar/SearchBarMode";

import "./InputSearchBar.scss";

interface IinputSearchBar {
  onFocus(): void;
  onBlur(): void;
  searchParameter: string;
  setSearchParameter: Dispatch<SetStateAction<string>>;
  mode: SearchBarMode;
}

const InputSearchBar = ({
  onFocus,
  onBlur,
  searchParameter,
  setSearchParameter,
  mode,
}: IinputSearchBar) => {
  return (
    <input
      type="text"
      className="inputSearchBar"
      onClick={() => onFocus()}
      onBlur={() => onBlur()}
      onChange={(e) => setSearchParameter(e.target.value)}
      value={searchParameter}
      placeholder="Buscar"
      style={{ backgroundColor: mode }}
    />
  );
};

export default InputSearchBar;
