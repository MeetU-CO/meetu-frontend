import "./SecondTitle.scss";

interface IMainTitle {
  title: (string | JSX.Element)[];
  fontSize: string;
}

const SecondTitle = ({ title, fontSize }: IMainTitle) => {
  return (
    <div className="secondTitle" style={{ fontSize }}>
      <h2>{title}</h2>
    </div>
  );
};

export default SecondTitle;
