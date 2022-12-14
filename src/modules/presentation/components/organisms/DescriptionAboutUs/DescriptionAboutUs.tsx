import Blob7 from "../../../assets/Blobs/Blob7.svg";
import Blob8 from "../../../assets/Blobs/Blob8.svg";
import LogoOrange from "../../../assets/LogoOrange.svg";

import SoftText from "../../atoms/SoftText/SoftText";

import TitleWithHead from "../../molecules/TitleWithHead/TitleWithHead";

import { IBlob } from "../../../templates/LayoutBlobs/IBlob";
import LayoutBlobs from "../../../templates/LayoutBlobs/LayoutBlobs";

import "./DescriptionAboutUs.scss";

interface IDescriptionAboutUs {}

const DescriptionAboutUs = ({}: IDescriptionAboutUs) => {
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
      right: "-410px",
      left: "",
      width: "",
      zIndex: "",
    },
  ];

  return (
    <div className="descriptionAboutUs">
      <LayoutBlobs blobs={layoutBlobs} maxWidth="2000px">
        <div className="descriptionAboutUs__definition">
          <TitleWithHead
            head={"Sobre nosotros"}
            title={"MeetU es una StartUp Colombiana"}
          />
          <div className="descriptionAboutUs__softText-Container">
            <SoftText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum, justo quis faucibus laoreet, nibh nisi congue arcu, ac dictum risus neque in eros. Nam elementum et justo quis ultrices. Duis quam orci, bibendum vitae sapien volutpat, venenatis fermentum lacus. Maecenas hendrerit venenatis massa in sollicitudin." />
          </div>
        </div>
        <div className="descriptionAboutUs__image">
          <img src={LogoOrange} alt="" />
        </div>
      </LayoutBlobs>
    </div>
  );
};

export default DescriptionAboutUs;
