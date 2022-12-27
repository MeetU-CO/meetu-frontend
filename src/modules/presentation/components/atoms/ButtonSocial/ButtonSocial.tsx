import "./ButtonSocial.scss";

interface IButtonSocial {
  imgUrl: string;
  text: string;
  color: string;
  textColor: string;
  fill: boolean;
  border: boolean;
  onClick(): void;
}

const ButtonSocial = ({
  imgUrl,
  text,
  color,
  textColor,
  fill,
  border,
  onClick,
}: IButtonSocial) => {
  return (
    <div
      className="buttonSocial"
      onClick={() => onClick()}
      style={{
        border: border ? `2px solid ${color}` : "0px solid",
        backgroundColor: fill ? color : "var(--white-full-color)",
      }}
    >
      <div className="buttonSocial__img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="buttonSocial__text" style={{ color: textColor }}>
        {text}
      </div>
    </div>
  );
};

export default ButtonSocial;
