import "./TitleWithHead.scss";

interface ITitleWithHead {
  head: string;
  title: string;
  align: "center" | "flex-start" | "flex-end";
}

const TitleWithHead = ({ head, title, align }: ITitleWithHead) => {
  return (
    <div
      className="titleWithHead"
      style={{
        alignItems: align,
        textAlign: align === "center" ? "center" : "left",
      }}
    >
      <h3>{head}</h3>
      <h2>{title}</h2>
    </div>
  );
};

export default TitleWithHead;
