import "./IconSearchBar.scss";

const IconSearchBar = () => {
  return (
    <div className="iconSearchBar">
      <div className="iconSearchBar__divisor-line"></div>
      <button className="iconSearchBar__icon">
        <span className="material-icons">search</span>
      </button>
    </div>
  );
};

export default IconSearchBar;
