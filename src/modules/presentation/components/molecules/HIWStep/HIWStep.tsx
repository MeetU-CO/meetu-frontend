import IconStep from "../../atoms/IconStep/IconStep";
import SmallDescriptionText from "../../atoms/SmallDescriptionText/SmallDescriptionText";
import TitleH2 from "../../atoms/TitleH2/TitleH2";

import "./HIWStep.scss";

interface IHIWStep {
  icon: JSX.Element;
  title: string;
  description: (string | JSX.Element)[];
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
        <SmallDescriptionText description={description} fontSize="15px" />
      </div>
    </div>
  );
};

export default HIWStep;
