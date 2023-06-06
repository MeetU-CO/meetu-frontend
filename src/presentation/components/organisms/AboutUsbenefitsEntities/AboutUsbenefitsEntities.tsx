import Blob10 from "../../../assets/Blobs/Blob10.svg";
import Blob11 from "../../../assets/Blobs/Blob11.svg";
import PencilBooks from "../../../assets/PencilBooks.svg";

import ButtonLinkActive from "../../atoms/ButtonLinkActive/ButtonLinkActive";

import QualityCard from "../../molecules/QualityCard/QualityCard";
import TitleWithHead from "../../molecules/TitleWithHead/TitleWithHead";

import { IBlob } from "../../../templates/LayoutBlobs/IBlob";
import LayoutBlobs from "../../../templates/LayoutBlobs/LayoutBlobs";

import "./AboutUsbenefitsEntities.scss";

interface IAboutUsbenefitsEntities {}

const AboutUsbenefitsEntities = ({}: IAboutUsbenefitsEntities) => {
  const layoutBlobs: IBlob[] = [
    {
      id: "blob10",
      src: Blob10,
      top: "100px",
      bottom: "",
      right: "",
      left: "-530px",
      width: "",
      zIndex: "-1",
    },
    {
      id: "blob11",
      src: Blob11,
      top: "",
      bottom: "-50px",
      right: "-150px",
      left: "",
      width: "",
      zIndex: "-1",
    },
  ];

  return (
    <div className="aboutUsbenefitsEntities">
      <LayoutBlobs blobs={layoutBlobs} maxWidth="2000px" direction="column">
        <div className="aboutUsbenefitsEntities__titleContainer">
          <TitleWithHead
            head={"Beneficios"}
            title={"MeetU para universidades y empresas"}
            align={"center"}
            textAlign={"center"}
          />
        </div>
        <div className="aboutUsbenefitsEntities__content">
          <div className="aboutUsbenefitsEntities__benefits">
            <QualityCard
              title="Sencillez"
              text="Crea de forma sencilla todo tipo de ofertas, ahorrando tiempo, saltándote validaciones y pasos tediosos."
              icon="chair"
              color="var(--orange-color)"
            />
            <QualityCard
              title="Mayor difusión"
              text="Visibilidad en las universidades asociadas, encuentra fácilmente practicantes y estudiantes de múltiples instituciones."
              icon="bolt"
              color="var(--orange-color)"
            />
            <QualityCard
              title="Métricas"
              text="Panel de tu organización donde puedes ver las analíticas de cada oferta que hayas creado o un resumen de todas en conjunto."
              icon="notifications"
              color="var(--orange-color)"
            />
            <QualityCard
              title="Mejor gestión"
              text="Divide tareas dentro de tu organización, al crear múltiples usuarios encargados de distintas categorías y áreas."
              icon="payments"
              color="var(--orange-color)"
            />
          </div>
          <div className="aboutUsbenefitsEntities__form">
            <div className="aboutUsbenefitsEntities__titleForm">
              <TitleWithHead
                head={"Inicia ahora"}
                title={"MeetU es más que una plataforma, es una comunidad"}
                align={"center"}
                textAlign={"center"}
              />
            </div>
            <img
              src={PencilBooks}
              alt=""
              className="aboutUsbenefitsEntities__imageForm"
            />
            <div className="aboutUsbenefitsEntities__button">
              <ButtonLinkActive link={"/signup"} text={"Contáctanos"} />
            </div>
          </div>
        </div>
      </LayoutBlobs>
    </div>
  );
};

export default AboutUsbenefitsEntities;
