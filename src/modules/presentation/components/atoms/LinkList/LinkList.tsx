import "./LinkList.scss";

interface ILinkList {
  title: string;
  link: string;
  color: string;
}

const LinkList = ({ title, link, color }: ILinkList) => {
  return (
    <li className="linkList">
      <a className="linkList__link" href={link} style={{ color: color }}>
        {title}
      </a>
    </li>
  );
};

export default LinkList;
