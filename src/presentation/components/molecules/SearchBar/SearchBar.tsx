import { Dispatch, SetStateAction, useRef, useState } from "react";

import IconSearchBar from "../../atoms/IconSearchBar/IconSearchBar";
import InputSearchBar from "../../atoms/InputSearchBar/InputSearchBar";

import "./SearchBar.scss";
import { SearchBarMode } from "./SearchBarMode";

interface ISearchBar {
  focus: boolean;
  setFocus: Dispatch<SetStateAction<boolean>>;
  mode: SearchBarMode;
}

const SearchBar = ({ focus, setFocus, mode }: ISearchBar) => {
  const [searchParameter, setSearchParameter] = useState<string>("");
  const containerRef = useRef<any>();

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <div
      className={`searchBar ${focus ? "searchBar--focus" : "searchBar--blur"}`}
      ref={containerRef}
    >
      <InputSearchBar
        onFocus={onFocus}
        onBlur={onBlur}
        searchParameter={searchParameter}
        setSearchParameter={setSearchParameter}
        mode={mode}
      />
      <IconSearchBar
        searchParameter={searchParameter}
        setSearchParameter={setSearchParameter}
        mode={mode}
      />
    </div>
  );
};

export default SearchBar;
