import "./ButtonActive.scss";

interface IButtonActive {
  type: "button" | "submit" | "reset";
  text: string;
}

const ButtonActive = ({ type, text }: IButtonActive) => {
  return (
    <button type={type} className="buttonActive">
      {text}
    </button>
  );
};

export default ButtonActive;
