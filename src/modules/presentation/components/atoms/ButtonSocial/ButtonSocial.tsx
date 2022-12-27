import "./ButtonSocial.scss";

interface IButtonSocial {
  imgUrl: string;
  text: string;
  color: string;
  textColor: string;
  fill: boolean;
  border: boolean;
  shadow: string;
  onClick(): void;
}

const ButtonSocial = ({
  imgUrl,
  text,
  color,
  textColor,
  fill,
  border,
  shadow,
  onClick,
}: IButtonSocial) => {
  return (
    <div
      className="buttonSocial"
      onClick={() => onClick()}
      style={{
        border: border ? `2px solid ${color}` : "0px solid",
        backgroundColor: fill ? color : "#FFF",
        boxShadow: shadow
          ? `0px 0px 2.41919px ${shadow}, 0px 2.41919px 2.41919px ${shadow}`
          : "",
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
