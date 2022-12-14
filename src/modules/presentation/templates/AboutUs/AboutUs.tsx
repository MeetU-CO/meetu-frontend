import BannerAboutUs from "../../components/organisms/BannerAboutUs/BannerAboutUs";
import DescriptionAboutUs from "../../components/organisms/DescriptionAboutUs/DescriptionAboutUs";

import "./AboutUs.scss";

interface IAboutUs {}

const AboutUs = ({}: IAboutUs) => {
  return (
    <div className="aboutus-template">
      <BannerAboutUs />
      <DescriptionAboutUs />
    </div>
  );
};

export default AboutUs;
