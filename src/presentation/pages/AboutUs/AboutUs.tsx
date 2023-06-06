import AboutUsTemplate from "../../templates/AboutUs/AboutUs";
import "./AboutUs.scss";

interface IAboutUs {}

const AboutUs = ({}: IAboutUs) => {
  return (
    <div className="aboutus">
      <AboutUsTemplate />
    </div>
  );
};

export default AboutUs;
