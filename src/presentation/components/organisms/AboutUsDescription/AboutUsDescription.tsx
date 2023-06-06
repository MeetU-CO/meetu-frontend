import Blob7 from "../../../assets/Blobs/Blob7.svg";
import Blob8 from "../../../assets/Blobs/Blob8.svg";
import LogoOrange from "../../../assets/Logos/LogoOrange.svg";

import TextLight from "../../atoms/TextLight/TextLight";

import TitleWithHead from "../../molecules/TitleWithHead/TitleWithHead";

import { IBlob } from "../../../templates/LayoutBlobs/IBlob";
import LayoutBlobs from "../../../templates/LayoutBlobs/LayoutBlobs";

import "./AboutUsDescription.scss";

interface IAboutUsDescription {}

const AboutUsDescription = ({}: IAboutUsDescription) => {
  const layoutBlobs: IBlob[] = [
    {
      id: "blob8",
      src: Blob8,
      top: "",
      bottom: "",
      right: "",
      left: "-730px",
      width: "",
      zIndex: "",
    },
    {
      id: "blob7",
      src: Blob7,
      top: "",
      bottom: "",
      right: "-440px",
      left: "",
      width: "",
      zIndex: "",
    },
  ];

  return (
    <div className="aboutUsDescription">
      <LayoutBlobs blobs={layoutBlobs} maxWidth="2000px" direction="row">
        <div className="aboutUsDescription__definition">
          <TitleWithHead
            head={"Sobre nosotros"}
            title={"MeetU es una StartUp Colombiana"}
            align={"flex-start"}
            textAlign={"left"}
          />
          <div className="aboutUsDescription__textSoftContainer">
            <TextLight
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum, justo quis faucibus laoreet, nibh nisi congue arcu, ac dictum risus neque in eros. Nam elementum et justo quis ultrices. Duis quam orci, bibendum vitae sapien volutpat, venenatis fermentum lacus. Maecenas hendrerit venenatis massa in sollicitudin."
              textAlign={"left"}
            />
          </div>
        </div>
        <div className="aboutUsDescription__image">
          <img src={LogoOrange} alt="" />
        </div>
      </LayoutBlobs>
    </div>
  );
};

export default AboutUsDescription;
