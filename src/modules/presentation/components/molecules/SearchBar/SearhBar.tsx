import IconSearchBar from "../../atoms/IconSearchBar/IconSearchBar";
import InputSearchBar from "../../atoms/InputSearchBar/InputSearchBar";

import "./SearchBar.scss";

const SearhBar = () => {
  return (
    <div className="searchBar">
      <InputSearchBar />
      <IconSearchBar />
    </div>
  );
};

export default SearhBar;
