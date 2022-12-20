import LogoGlobant from "../../../assets/Logos/LogoGlobant.png";
import LogoJaveriana from "../../../assets/Logos/LogoJaveriana.png";
import LogoSabana from "../../../assets/Logos/LogoSabana.png";
import LogoUnal from "../../../assets/Logos/LogoUnal.png";

import ImageClickable from "../../atoms/ImageClickable/ImageClickable";

import TitleWithHead from "../../molecules/TitleWithHead/TitleWithHead";

import { IBlob } from "../../../templates/LayoutBlobs/IBlob";
import LayoutBlobs from "../../../templates/LayoutBlobs/LayoutBlobs";

import "./AboutUsAssociations.scss";

interface IAboutUsAssociations {}

const AboutUsAssociations = ({}: IAboutUsAssociations) => {
  const layoutBlobs: IBlob[] = [];

  return (
    <div className="aboutUsAssociations">
      <LayoutBlobs blobs={layoutBlobs} maxWidth="2000px" direction="column">
        <TitleWithHead
          head={"Ellos confiaron en nosotros"}
          title={"Universidades y empresas en MeetU"}
          align={"center"}
          textAlign={"center"}
        />
        <div className="aboutUsAssociations__entities">
          <ImageClickable
            link={"https://www.unisabana.edu.co/"}
            url={LogoSabana}
            width={"200px"}
          />
          <ImageClickable
            link={"https://www.javeriana.edu.co/inicio"}
            url={LogoJaveriana}
            width={"200px"}
          />
          <ImageClickable
            link={"https://unal.edu.co/"}
            url={LogoUnal}
            width={"150px"}
          />
          <ImageClickable
            link={"https://www.globant.com"}
            url={LogoGlobant}
            width={"260px"}
          />
        </div>
      </LayoutBlobs>
    </div>
  );
};

export default AboutUsAssociations;