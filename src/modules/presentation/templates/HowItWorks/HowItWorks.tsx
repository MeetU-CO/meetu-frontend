import TitleH1 from "../../components/atoms/TitleH1/TitleH1";

import "./HowItWorks.scss";

interface IHowItWorks {
  mainTitle: string;
  icon: JSX.Element;
  steps: JSX.Element;
}

const HowItWorks = ({ mainTitle, icon, steps }: IHowItWorks) => {
  return (
    <div className="howItWorks-template">
      <div className="howItWorks-template__title-container">
        <TitleH1
          title={mainTitle}
          color="var(--black-full-color)"
          textAlign={"center"}
        />
      </div>
      <div className="howItWorks-template__explanation">
        <div className="howItWorks-template__explanation__icon">{icon}</div>
        <div className="howItWorks-template__explanation__steps">{steps}</div>
      </div>
    </div>
  );
};

export default HowItWorks;
