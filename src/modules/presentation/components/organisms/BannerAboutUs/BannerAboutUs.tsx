import Blob3 from "../../../assets/Blobs/Blob3.svg";
import Blob4 from "../../../assets/Blobs/Blob4.svg";
import Blob5 from "../../../assets/Blobs/Blob5.svg";
import Blob6 from "../../../assets/Blobs/Blob6.svg";

import { IBlob } from "../../../templates/LayoutBlobs/IBlob";
import LayoutBlobs from "../../../templates/LayoutBlobs/LayoutBlobs";

import "./BannerAboutUs.scss";

interface IBannerAboutUs {}

const BannerAboutUs = ({}: IBannerAboutUs) => {
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
    <div className="bannerAboutUs">
      <LayoutBlobs blobs={layoutBlobs} maxWidth="3000px">
        <div className="bannerAboutUs__container">
          <div className="bannerAboutUs__title">
            <h1>Conecta la oportunidad ideal con la persona ideal</h1>
            <h3>
              Conectamos estudiantes, empresas y universidades con trabajos
              fuera y dentro del campus.
            </h3>
          </div>
          <img className="bannerAboutUs__image" src={Blob6} alt="" />
        </div>
      </LayoutBlobs>
    </div>
  );
};

export default BannerAboutUs;
