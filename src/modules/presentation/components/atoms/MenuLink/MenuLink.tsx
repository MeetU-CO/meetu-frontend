import "./MenuLink.scss";

interface IMenuLink {
  title: string;
  link: string;
  color: string;
}

const MenuLink = ({ title, link, color }: IMenuLink) => {
  return (
    <li className="menuLink">
      <a className="menuLink__link" href={link} style={{ color: color }}>
        {title}
      </a>
    </li>
  );
};

export default MenuLink;
