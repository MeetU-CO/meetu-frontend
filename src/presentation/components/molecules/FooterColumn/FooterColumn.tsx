import LinkList from "../../atoms/LinkList/LinkList";

import "./FooterColumn.scss";

interface ILinks {
  title: string;
  link: string;
}

interface IFooterColumn {
  title: string;
  titleColor: string;
  links: ILinks[];
  linksColor: string;
}

const FooterColumn = ({
  title,
  titleColor,
  links,
  linksColor,
}: IFooterColumn) => {
  return (
    <div className="footerColumn">
      <h3
        className="footerColumn__title"
        style={{ color: titleColor, fontWeight: "800" }}
      >
        {title}
      </h3>
      <ul className="footerColumn__ul">
        {links.map((i, index) => (
          <LinkList
            key={index}
            title={i.title}
            link={i.link}
            color={linksColor}
          />
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
