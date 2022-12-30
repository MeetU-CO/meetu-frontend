import Blob3 from "../../../assets/Blobs/Blob3.svg";
import Blob4 from "../../../assets/Blobs/Blob4.svg";
import Blob5 from "../../../assets/Blobs/Blob5.svg";
import Blob6 from "../../../assets/Blobs/Blob6.svg";

import TitleH1_Bold from "../../atoms/TitleH1_Bold/TitleH1_Bold";
import TitleH3Light from "../../atoms/TitleH3Light/TitleH3Light";

import { IBlob } from "../../../templates/LayoutBlobs/IBlob";
import LayoutBlobs from "../../../templates/LayoutBlobs/LayoutBlobs";

import "./AboutUsBanner.scss";

interface IAboutUsBanner {}

const AboutUsBanner = ({}: IAboutUsBanner) => {
  const layoutBlobs: IBlob[] = [
    {
      id: "blob3",
      src: Blob3,
      top: "",
      bottom: "-450px",
      right: "-250px",
      left: "",
      width: "",
      zIndex: "1",
    },
    {
      id: "blob4",
      src: Blob4,
      top: "",
      bottom: "-350px",
      right: "",
      left: "-50px",
      width: "",
      zIndex: "",
    },
    {
      id: "blob5",
      src: Blob5,
      top: "",
      bottom: "-500px",
      right: "300px",
      left: "",
      width: "",
      zIndex: "",
    },
  ];

  return (
    <div className="aboutUsBanner">
      <LayoutBlobs blobs={layoutBlobs} maxWidth="3000px" direction={"row"}>
        <div className="aboutUsBanner__container">
          <div className="aboutUsBanner__title">
            <TitleH1_Bold
              title="Conecta la oportunidad ideal con la persona ideal"
              color="var(--white-full-color)"
              textAlign={"left"}
            />
            <TitleH3Light
              title="Conectamos estudiantes, empresas y universidades con trabajos
              fuera y dentro del campus."
              color="var(--white-full-color)"
              textAlign="left"
            />
          </div>
          <img className="aboutUsBanner__image" src={Blob6} alt="" />
        </div>
      </LayoutBlobs>
    </div>
  );
};

export default AboutUsBanner;
