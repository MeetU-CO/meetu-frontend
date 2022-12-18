import "./ButtonPasive.scss";

interface IActionButton {
  type: "button" | "submit" | "reset";
  text: string;
}

const ButtonPasive = ({ type, text }: IActionButton) => {
  return (
    <button type={type} className="buttonPasive">
      {text}
    </button>
  );
};

export default ButtonPasive;
