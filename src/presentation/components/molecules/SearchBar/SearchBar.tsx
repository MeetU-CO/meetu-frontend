import { Dispatch, SetStateAction, useRef, useState } from "react";

import IconSearchBar from "../../atoms/IconSearchBar/IconSearchBar";
import InputSearchBar from "../../atoms/InputSearchBar/InputSearchBar";

import "./SearchBar.scss";

interface ISearchBar {
  focus: boolean;
  setFocus: Dispatch<SetStateAction<boolean>>;
}

const SearchBar = ({ focus, setFocus }: ISearchBar) => {
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
      />
      <IconSearchBar
        searchParameter={searchParameter}
        setSearchParameter={setSearchParameter}
      />
    </div>
  );
};

export default SearchBar;
