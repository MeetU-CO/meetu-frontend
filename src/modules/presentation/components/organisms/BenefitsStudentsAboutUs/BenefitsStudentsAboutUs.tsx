import Blob9 from "../../../assets/Blobs/Blob9.svg";

import ButtonLinkActive from "../../atoms/ButtonLinkActive/ButtonLinkActive";

import QualityCard from "../../molecules/QualityCard/QualityCard";
import TitleWithHead from "../../molecules/TitleWithHead/TitleWithHead";

import { IBlob } from "../../../templates/LayoutBlobs/IBlob";
import LayoutBlobs from "../../../templates/LayoutBlobs/LayoutBlobs";

import "./BenefitsStudentsAboutUs.scss";

interface IBenefitsStudentsAboutUs {}

const BenefitsStudentsAboutUs = ({}: IBenefitsStudentsAboutUs) => {
  const layoutBlobs: IBlob[] = [
    {
      id: "blob9",
      src: Blob9,
      top: "",
      bottom: "-350px",
      right: "-280px",
      left: "",
      width: "",
      zIndex: "-1",
    },
  ];

  return (
    <div className="benefitsStudentsAboutUs">
      <LayoutBlobs blobs={layoutBlobs} maxWidth="2000px" direction="column">
        <div className="benefitsStudentsAboutUs__titleContainer">
          <TitleWithHead
            head={"Beneficios"}
            title={"MeetU para estudiantes"}
            align={"center"}
            textAlign={"center"}
          />
        </div>

        <div className="benefitsStudentsAboutUs__benefits">
          <QualityCard
            title="Comodidad"
            text="Encuentra de forma sencilla todos los eventos, actividades y oportunidades laborales dentro y fuera de tu U en un solo lugar."
            icon="chair"
            color="var(--orange-color)"
          />
          <div className="benefitsStudentsAboutUs__divisorLine"></div>
          <QualityCard
            title="Rapidez"
            text="Encuentra de forma sencilla todos los eventos, actividades y oportunidades laborales dentro y fuera de tu U en un solo lugar."
            icon="bolt"
            color="var(--orange-color)"
          />
          <div className="benefitsStudentsAboutUs__divisorLine"></div>
          <QualityCard
            title="Notificaciones"
            text="Encuentra de forma sencilla todos los eventos, actividades y oportunidades laborales dentro y fuera de tu U en un solo lugar."
            icon="notifications"
            color="var(--orange-color)"
          />
          <div className="benefitsStudentsAboutUs__divisorLine"></div>
          <QualityCard
            title="Gratis"
            text="Encuentra de forma sencilla todos los eventos, actividades y oportunidades laborales dentro y fuera de tu U en un solo lugar."
            icon="payments"
            color="var(--orange-color)"
          />
          <div className="benefitsStudentsAboutUs__button">
            <ButtonLinkActive link="/login" text={"Empieza aquí"} />
          </div>
        </div>
      </LayoutBlobs>
    </div>
  );
};

export default BenefitsStudentsAboutUs;
