import "./TitleH1.scss";

interface ITitleH1 {
  title: string | (string | JSX.Element)[];
  [rest: string]: any;
}

export const TitleH1 = ({ title, ...rest }: ITitleH1) => {
  return (
    <h1 className="titleH1" style={{ ...rest }}>
      {title}
    </h1>
  );
};
