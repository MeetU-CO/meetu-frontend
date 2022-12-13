import "./SearchBarIcon.scss";

const SearchBarIcon = () => {
  return (
    <div className="searchBar-icon">
      <div className="searchBar-icon__divisor-line"></div>
      <button className="searchBar-icon__icon">
        <span className="material-icons">search</span>
      </button>
    </div>
  );
};

export default SearchBarIcon;
