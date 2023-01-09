import { Dispatch, SetStateAction } from "react";

import "./InputSearchBar.scss";

interface IinputSearchBar {
  onFocus(): void;
  onBlur(): void;
  searchParameter: string;

  setSearchParameter: Dispatch<SetStateAction<string>>;
}

const InputSearchBar = ({
  onFocus,
  onBlur,
  searchParameter,
  setSearchParameter,
}: IinputSearchBar) => {
  return (
    <input
      type="text"
      className="inputSearchBar"
      onClick={() => onFocus()}
      onBlur={() => onBlur()}
      onChange={(e) => setSearchParameter(e.target.value)}
      value={searchParameter}
    />
  );
};

export default InputSearchBar;
