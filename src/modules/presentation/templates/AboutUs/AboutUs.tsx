import AboutUsBanner from "../../components/organisms/BannerAboutUs/BannerAboutUs";

import "./AboutUs.scss";

interface IAboutUs {}

const AboutUs = ({}: IAboutUs) => {
  return (
    <div className="aboutus-template">
      <AboutUsBanner />
    </div>
  );
};

export default AboutUs;
