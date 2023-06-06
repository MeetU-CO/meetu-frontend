import "./LinkStatic.scss";

interface ILinkStatic {
  icon?: string;
  title?: string;
  color: string;
}

const LinkStatic = ({ icon, title, color }: ILinkStatic) => {
  return (
    <div className="linkStatic" style={{ color: color }}>
      <span className="linkStatic__icon material-icons">{icon}</span>
      {title ? <span className="linkStatic__title">{title}</span> : ""}
    </div>
  );
};

export default LinkStatic;
