import { Fragment } from "react";

import HIWStep from "../../molecules/HIWStep/HIWStep";

import "./HIWStepsContainer.scss";

const steps = [
  {
    icon: <i className="bi bi-mouse2-fill"></i>,
    title: "1. Únete a MeetU",
    description:
      "Inicia sesión en tu cuenta Dugol o crea una nueva usando tu correo electrónico de preferencia.",
  },
  {
    icon: <i className="bi bi-link"></i>,
    title: "2. Vincula tu cuenta",
    description:
      "Conecta tu cuenta Dugol con tu cuenta universitaria para obtener tu información académica.",
  },
  {
    icon: <i className="bi bi-star-fill"></i>,
    title: "3. ¡Listo!",
    description: `Ahora puedes inscribirte en ofertas de tu universidad, rápido y sencillo. (Cuando seas seleccionado para una oferta te enviaremos una notificacón)`,
  },
];

const HIWStepsContainer = () => {
  return (
    <div className="HIWStepsContainer">
      {steps.map((i, index) => {
        if (index < steps.length - 1) {
          return (
            <Fragment key={index}>
              <HIWStep
                icon={i.icon}
                title={i.title}
                description={i.description}
              />
              <i className="bi bi-arrow-down"></i>
            </Fragment>
          );
        }
        return (
          <HIWStep
            icon={i.icon}
            title={i.title}
            description={i.description}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default HIWStepsContainer;
