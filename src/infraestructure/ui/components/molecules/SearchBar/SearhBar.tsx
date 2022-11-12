import React from "react";
import "./SearchBar.scss";
import SearhBarInput from "../../atoms/SearhBarInput/SearhBarInput";
import SearchBarIcon from "../../atoms/SearchBarIcon/SearchBarIcon";

const SearhBar = () => {
  return (
    <div className="searchBar">
      <SearhBarInput />
      <SearchBarIcon />
    </div>
  );
};

export default SearhBar;
