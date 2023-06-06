import "./ButtonPassive.scss";

interface IActionButton {
  type: "button" | "submit" | "reset";
  text: string;
}

const ButtonPassive = ({ type, text }: IActionButton) => {
  return (
    <button type={type} className="buttonPassive">
      {text}
    </button>
  );
};

export default ButtonPassive;
