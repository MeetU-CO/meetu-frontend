import "./TitleWithHead.scss";

interface ITitleWithHead {
  head: string;
  title: string;
}

const TitleWithHead = ({ head, title }: ITitleWithHead) => {
  return (
    <div className="titleWithHead">
      <h3>{head}</h3>
      <h2>{title}</h2>
    </div>
  );
};

export default TitleWithHead;
