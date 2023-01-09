import IconStep from "../../atoms/IconStep/IconStep";
import TextNormal from "../../atoms/TextNormal/TextNormal";
import TitleH2 from "../../atoms/TitleH2/TitleH2";

import "./HIWStep.scss";

interface IHIWStep {
  icon: JSX.Element;
  title: string;
  description: string;
}

const HIWStep = ({ icon, title, description }: IHIWStep) => {
  return (
    <div className="HIWStep">
      <IconStep icon={icon} />
      <div className="HIWStep__details">
        <TitleH2
          title={title}
          color={"var(--black-full-color)"}
          textAlign={"left"}
        />
        <TextNormal text={description} textAlign={"left"} />
      </div>
    </div>
  );
};

export default HIWStep;
