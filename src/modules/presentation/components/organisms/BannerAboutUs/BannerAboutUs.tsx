import Blob3 from "../../../assets/Blobs/Blob3.svg";
import Blob4 from "../../../assets/Blobs/Blob4.svg";
import Blob5 from "../../../assets/Blobs/Blob5.svg";
import Blob6 from "../../../assets/Blobs/Blob6.svg";

import "./BannerAboutUs.scss";

interface IBannerAboutUs {}

const BannerAboutUs = ({}: IBannerAboutUs) => {
  return (
    <div className="bannerAboutUs">
      <div className="bannerAboutUs__blobs">
        <img id="blob3" src={Blob3} alt="" />
        <img id="blob4" src={Blob4} alt="" />
        <img id="blob5" src={Blob5} alt="" />
        <div className="bannerAboutUs__container">
          <div className="bannerAboutUs__title">
            <h1>Conecta la oportunidad ideal con la persona ideal</h1>
            <h3>
              Conectamos estudiantes, empresas y universidades con trabajos
              fuera y dentro del campus.
            </h3>
          </div>
          <img id="blob6" src={Blob6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerAboutUs;
