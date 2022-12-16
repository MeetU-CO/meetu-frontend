import AssociationsAboutUs from "../../components/organisms/AssociationsAboutUs/AssociationsAboutUs";
import BannerAboutUs from "../../components/organisms/BannerAboutUs/BannerAboutUs";
import DescriptionAboutUs from "../../components/organisms/DescriptionAboutUs/DescriptionAboutUs";

import "./AboutUs.scss";

interface IAboutUs {}

const AboutUs = ({}: IAboutUs) => {
  return (
    <div className="aboutus-template">
      <BannerAboutUs />
      <DescriptionAboutUs />
      <AssociationsAboutUs />
    </div>
  );
};

export default AboutUs;
