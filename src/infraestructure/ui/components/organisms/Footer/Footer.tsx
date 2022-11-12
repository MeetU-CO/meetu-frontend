import React from "react";
import MenuLink from "../../atoms/MenuLink/MenuLink";
import FooterColumn from "../../molecules/FooterColumn/FooterColumn";
import "./Footer.scss";

const Footer = () => {
  const interestLinks = [
    { title: "Sobre nosotros", link: "Sobre nosotros" },
    {
      title: "Universidades y compañias asociadas",
      link: "Universidades y compañias asociadas",
    },
    {
      title: "Aprende a usar MeetU",
      link: "Aprende a usar MeetU",
    },
  ];

  const joinUs = [
    { title: "Registra tu universidad", link: "Registra tu universidad" },
    {
      title: "Registra tu compañia",
      link: "Registra tu compañia",
    },
    {
      title: "Aprende a gestionar tu panel",
      link: "Aprende a gestionar tu panel",
    },
  ];

  const categories = [
    { title: "Medicina", link: "Medicina" },
    {
      title: "Derecho y ciencias Políticas",
      link: "Derecho y ciencias Políticas",
    },
    {
      title: "Ingeniería",
      link: "Ingeniería",
    },
    {
      title: "Psicología",
      link: "Psicología",
    },
    {
      title: "Economía",
      link: "Economía",
    },
    {
      title: "Comunicación",
      link: "Comunicación",
    },
    {
      title: "Ciencias",
      link: "Ciencias",
    },
    {
      title: "Administración",
      link: "Administración",
    },
  ];

  return (
    <div className="footer">
      <div className="footer__footer-container">
        <div className="footer__footer-container__topContent">
          <FooterColumn
            title="Links de interés"
            titleColor="var(--white-color)"
            links={interestLinks}
            linksColor="var(--white-color)"
          />
          <FooterColumn
            title="Únete a  nosotros"
            titleColor="var(--white-color)"
            links={joinUs}
            linksColor="var(--white-color)"
          />
          <FooterColumn
            title="Categorías"
            titleColor="var(--white-color)"
            links={categories}
            linksColor="var(--white-color)"
          />
        </div>
        <div className="footer__footer-container__divisor-line"></div>
        <div className="footer__footer-container__bottomContent">
          <div className="footer__footer-container__bottomContent__laws">
            <div className="footer__footer-container__bottomContent__laws__documents">
              <MenuLink
                title="Términos y Condiciones"
                link="/"
                color="var(--white-color)"
              />
              <MenuLink
                title="Políticas de Privacidad"
                link="/"
                color="var(--white-color)"
              />
              <MenuLink
                title="Tratamiento de Datos"
                link="/"
                color="var(--white-color)"
              />
            </div>
            <span>© 2022 MeetU Inc. All rights reserved.</span>
          </div>
          <div className="footer__footer-container__bottomContent__socialMediaIcons">
            <a>
              <i className="bi bi-instagram"></i>
            </a>
            <a>
              <i className="bi bi-facebook"></i>
            </a>
            <a>
              <i className="bi bi-twitter"></i>
            </a>
            <a>
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
