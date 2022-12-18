import IconSingle from "../../atoms/IconSingle/IconSingle";
import TextLight from "../../atoms/TextLight/TextLight";
import TitleH3 from "../../atoms/TitleH3/TitleH3";

import "./QualityCard.scss";

interface IQualityCard {
  title: string;
  text: string;
  icon: string;
  color: string;
}

const QualityCard = ({ title, text, icon, color }: IQualityCard) => {
  return (
    <div className="qualityCard">
      <IconSingle icon={icon} color={color} />
      <TitleH3 title={title} color="var(--orange-color)" textAlign="center" />
      <TextLight text={text} textAlign={"center"} />
    </div>
  );
};

export default QualityCard;
