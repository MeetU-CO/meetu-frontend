import QualityCard from "../../molecules/QualityCard/QualityCard";

import "./BenefitsStudentsAboutUs.scss";

interface IBenefitsStudentsAboutUs {}

const BenefitsStudentsAboutUs = ({}: IBenefitsStudentsAboutUs) => {
  return (
    <div className="benefitsStudentsAboutUs">
      <QualityCard
        title="Comodidad"
        text="Encuentra de forma sencilla todos los eventos, actividades y oportunidades laborales dentro y fuera de tu U en un solo lugar."
        icon="chair"
        color="var(--orange-color)"
      />
    </div>
  );
};

export default BenefitsStudentsAboutUs;
