import "material-icons";

import "./IconSingle.scss";

interface IIconSingle {
  icon: string;
  color: string;
}

const IconSingle = ({ icon, color }: IIconSingle) => {
  return (
    <span className="material-symbols-outlined iconSingle" style={{ color }}>
      {icon}
    </span>
  );
};

export default IconSingle;
