import QualityCard from "../../molecules/QualityCard/QualityCard";
import TitleWithHead from "../../molecules/TitleWithHead/TitleWithHead";

import "./BenefitsStudentsAboutUs.scss";

interface IBenefitsStudentsAboutUs {}

const BenefitsStudentsAboutUs = ({}: IBenefitsStudentsAboutUs) => {
  return (
    <div className="benefitsStudentsAboutUs">
      <TitleWithHead
        head={"Beneficios"}
        title={"MeetU para estudiantes"}
        align={"center"}
        textAlign={"center"}
      />
      <div className="benefitsStudentsAboutUs__benefits">
        <QualityCard
          title="Comodidad"
          text="Encuentra de forma sencilla todos los eventos, actividades y oportunidades laborales dentro y fuera de tu U en un solo lugar."
          icon="chair"
          color="var(--orange-color)"
        />
        <div className="benefitsStudentsAboutUs__divisorLine"></div>
        <QualityCard
          title="Rapidez"
          text="Encuentra de forma sencilla todos los eventos, actividades y oportunidades laborales dentro y fuera de tu U en un solo lugar."
          icon="bolt"
          color="var(--orange-color)"
        />
        <div className="benefitsStudentsAboutUs__divisorLine"></div>
        <QualityCard
          title="Notificaciones"
          text="Encuentra de forma sencilla todos los eventos, actividades y oportunidades laborales dentro y fuera de tu U en un solo lugar."
          icon="notifications"
          color="var(--orange-color)"
        />
        <div className="benefitsStudentsAboutUs__divisorLine"></div>
        <QualityCard
          title="Gratis"
          text="Encuentra de forma sencilla todos los eventos, actividades y oportunidades laborales dentro y fuera de tu U en un solo lugar."
          icon="payments"
          color="var(--orange-color)"
        />
      </div>
    </div>
  );
};

export default BenefitsStudentsAboutUs;
