import AboutUsAssociations from "../../components/organisms/AboutUsAssociations/AboutUsAssociations";
import AboutUsBanner from "../../components/organisms/AboutUsBanner/AboutUsBanner";
import AboutUsBenefitsStudents from "../../components/organisms/AboutUsBenefitsStudents/AboutUsBenefitsStudents";
import AboutUsDescription from "../../components/organisms/AboutUsDescription/AboutUsDescription";
import AboutUsbenefitsEntities from "../../components/organisms/AboutUsbenefitsEntities/AboutUsbenefitsEntities";

import "./AboutUs.scss";

interface IAboutUs {}

const AboutUs = ({}: IAboutUs) => {
  return (
    <div className="aboutus-template">
      <AboutUsBanner />
      <AboutUsDescription />
      <AboutUsBenefitsStudents />
      <AboutUsbenefitsEntities />
      <AboutUsAssociations />
    </div>
  );
};

export default AboutUs;
