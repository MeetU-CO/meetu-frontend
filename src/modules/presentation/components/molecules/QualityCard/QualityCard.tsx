import IconSingle from "../../atoms/IconSingle/IconSingle";
import TextCardSoft from "../../atoms/TextCardSoft/TextCardSoft";
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
      <TitleH3
        title={title}
        color="var(--orange-color)"
        fontFamily="Nunito"
        width="100%"
        fontSize="28px"
        fontWeight="600"
        textAlign="center"
      />
      <TextCardSoft text={text} />
    </div>
  );
};

export default QualityCard;
