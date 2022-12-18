import "./IconStep.scss";

interface IIconStep {
  icon: JSX.Element;
}

const IconStep = ({ icon }: IIconStep) => {
  return <div className="iconStep">{icon}</div>;
};

export default IconStep;
