import "./ThirdTitle.scss";

interface IThirdTitle {
  title: (string | JSX.Element)[];
  fontSize: string;
}

const ThirdTitle = ({ title, fontSize }: IThirdTitle) => {
  return (
    <div className="thirdTitle" style={{ fontSize }}>
      <h3>{title}</h3>
    </div>
  );
};

export default ThirdTitle;
