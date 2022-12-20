import TitleWithHead from "../../molecules/TitleWithHead/TitleWithHead";

import "./AboutUsbenefitsEntities.scss";

interface IAboutUsbenefitsEntities {}

const AboutUsbenefitsEntities = ({}: IAboutUsbenefitsEntities) => {
  return (
    <div className="aboutUsbenefitsEntities">
      <div className="aboutUsbenefitsEntities__titleContainer">
        <TitleWithHead
          head={"Beneficios"}
          title={"MeetU para universidades y empresas"}
          align={"center"}
          textAlign={"center"}
        />
      </div>
    </div>
  );
};

export default AboutUsbenefitsEntities;
