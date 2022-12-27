import { Dispatch, SetStateAction, useRef } from "react";

import IconSearchBar from "../../atoms/IconSearchBar/IconSearchBar";
import InputSearchBar from "../../atoms/InputSearchBar/InputSearchBar";

import useWindowDimensions from "../../../../application/hooks/useWindowDimensions";

import "./SearchBar.scss";

interface ISearchBar {
  focus: boolean;
  setFocus: Dispatch<SetStateAction<boolean>>;
}

const SearchBar = ({ focus, setFocus }: ISearchBar) => {
  const { width } = useWindowDimensions();
  const containerRef = useRef<any>();

  const onFocus = () => {
    setFocus(true);
    if (width <= 850) {
      containerRef.current.style.width = "100%";
      containerRef.current.style.height = "73px";
      containerRef.current.style.maxWidth = "100%";
    }
  };

  const onBlur = () => {
    setFocus(false);
    if (width <= 850) {
      containerRef.current.style.width = "55%";
      containerRef.current.style.height = "35px";
      containerRef.current.style.maxWidth = "634px";
    }
  };

  return (
    <div
      className="searchBar"
      data-testid="searchBar"
      onFocus={() => onFocus()}
      onBlur={() => onBlur()}
      ref={containerRef}
    >
      <InputSearchBar />
      <IconSearchBar />
    </div>
  );
};

export default SearchBar;
