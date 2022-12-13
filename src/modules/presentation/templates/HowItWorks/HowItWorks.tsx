import "./HowItWorks.scss";

interface IHowItWorks {
  mainTitle: JSX.Element;
  icon: JSX.Element;
  steps: JSX.Element;
}

const HowItWorks = ({ mainTitle, icon, steps }: IHowItWorks) => {
  return (
    <div className="howItWorks-template">
      {mainTitle}
      <div className="howItWorks-template__explanation">
        <div className="howItWorks-template__explanation__icon">{icon}</div>
        <div className="howItWorks-template__explanation__steps">{steps}</div>
      </div>
    </div>
  );
};

export default HowItWorks;
