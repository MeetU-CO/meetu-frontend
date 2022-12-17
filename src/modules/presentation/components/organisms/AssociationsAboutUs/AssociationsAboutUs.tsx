import LogoGlobant from "../../../assets/Logos/LogoGlobant.png";
import LogoJaveriana from "../../../assets/Logos/LogoJaveriana.png";
import LogoSabana from "../../../assets/Logos/LogoSabana.png";
import LogoUnal from "../../../assets/Logos/LogoUnal.png";

import ImageClickable from "../../atoms/ClickableImage/ClickableImage";

import TitleWithHead from "../../molecules/TitleWithHead/TitleWithHead";

import { IBlob } from "../../../templates/LayoutBlobs/IBlob";
import LayoutBlobs from "../../../templates/LayoutBlobs/LayoutBlobs";

import "./AssociationsAboutUs.scss";

interface IAssociationsAboutUs {}

const AssociationsAboutUs = ({}: IAssociationsAboutUs) => {
  const layoutBlobs: IBlob[] = [];

  return (
    <div className="associationsAboutUs">
      <LayoutBlobs blobs={layoutBlobs} maxWidth="2000px" direction="column">
        <TitleWithHead
          head={"Ellos confiaron en nosotros"}
          title={"Universidades y empresas en MeetU"}
          align={"center"}
        />
        <div className="associationsAboutUs__entities">
          <ImageClickable
            link={"https://www.unisabana.edu.co/"}
            imageUrl={LogoSabana}
            width={"200px"}
          />
          <ImageClickable
            link={"https://www.javeriana.edu.co/inicio"}
            imageUrl={LogoJaveriana}
            width={"200px"}
          />
          <ImageClickable
            link={"https://unal.edu.co/"}
            imageUrl={LogoUnal}
            width={"150px"}
          />
          <ImageClickable
            link={"https://www.globant.com"}
            imageUrl={LogoGlobant}
            width={"260px"}
          />
        </div>
      </LayoutBlobs>
    </div>
  );
};

export default AssociationsAboutUs;
