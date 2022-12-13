import "./StepIcon.scss";

interface IStepIcon {
  icon: JSX.Element;
}

const StepIcon = ({ icon }: IStepIcon) => {
  return <div className="stepIcon">{icon}</div>;
};

export default StepIcon;
