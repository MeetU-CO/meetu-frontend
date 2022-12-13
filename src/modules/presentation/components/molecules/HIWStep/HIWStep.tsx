import "./HIWStep.scss";
import SecondTitle from "../../atoms/SecondTitle/SecondTitle";
import SmallDescriptionText from "../../atoms/SmallDescriptionText/SmallDescriptionText";
import StepIcon from "../../atoms/StepIcon/StepIcon";

interface IHIWStep {
  icon: JSX.Element;
  title: string;
  description: (string | JSX.Element)[];
}

const HIWStep = ({ icon, title, description }: IHIWStep) => {
  return (
    <div className="HIWStep">
      <StepIcon icon={icon} />
      <div className="HIWStep__details">
        <SecondTitle title={[title]} fontSize="16px" />
        <SmallDescriptionText description={description} fontSize="15px" />
      </div>
    </div>
  );
};

export default HIWStep;
