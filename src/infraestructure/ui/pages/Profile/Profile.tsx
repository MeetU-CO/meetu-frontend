import React from "react";
import "./Profile.scss";
import ProfileTemplate from "../../templates/Profile/Profile";
import { IOffer } from "../../components/organisms/OfferCard/IOffer";

const Profile = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta luctus sapien, sed aliquet mauris venenatis vitae. Cras eget molestie leo. Nullam luctus, magna vel ultricies cursus, nisl ex pretium odio, id placerat lectus diam id augue. Mauris non erat sodales, condimentum diam";

  const profileSideInfoData = [
    { field: "ID", value: "223583" },
    { field: "Email", value: "jonathanburo@unisabana.edu.co" },
    { field: "Genero", value: "Hombre" },
    { field: "Ciudad", value: "Bogotá D.C" },
    { field: "Número de documento", value: "1001203135" },
    { field: "Teléfono", value: "3224746678" },
    { field: "Fecha de nacimiento", value: "27/10/2003" },
    { field: "País de origen", value: "Colombia" },
  ];

  const profileBottomInfoData = [
    { field: "Semestre", value: "6 semestre" },
    { field: "Promedio acumulado", value: "4.1" },
    { field: "Promedio último semestre", value: "4.3" },
    { field: "Grupos asociados", value: "PTB, PAT, Selección de fútbol" },
    { field: "Actividades destacadas", value: "apoyo living lab, apoyo ceis" },
    { field: "Conocimientos", value: "Redacción, Excel, AutoCad" },
    {
      field: "Linkedin",
      value: "Ver perfil",
      link: "https://www.linkedin.com/in/jonathan-buitrago-6602201b1/",
    },
    {
      field: "Linkedin",
      value: "Ver perfil",
      link: "https://www.linkedin.com/in/jonathan-buitrago-6602201b1/",
    },
  ];

  const mainInfoData = {
    profileImg:
      "https://jonathanbuitragoroncancio.web.app/static/media/Perfil.f0771ba9.jpg",
    name: "Jonathan Buitrago Roncancio",
    carreer: "Ingeniería Informática",
    university: "Universidad de La Sabana",
  };

  const currentJobs: IOffer[] = [
    {
      userName: "Universidad de La Sabana",
      imgSrc:
        "https://image.winudf.com/v2/image/Y29tLnNhYmFuYS5hbmRyb2lkXzIuZHBzX3NjcmVlbnNob3RzXzBfNDM5MGE3NTQ/screen-0.jpg?h=355&fakeurl=1&type=.webp",
      type: "Presencial",
      categoryName: "Ingeniería",
      title: "Desarrollador web",
      text: text,
      payment: "7200cop/hora",
    },
    {
      userName: "Universidad de La Sabana",
      imgSrc:
        "https://image.winudf.com/v2/image/Y29tLnNhYmFuYS5hbmRyb2lkXzIuZHBzX3NjcmVlbnNob3RzXzBfNDM5MGE3NTQ/screen-0.jpg?h=355&fakeurl=1&type=.webp",
      type: "Presencial",
      categoryName: "Ingeniería",
      title: "Desarrollador web",
      text: text,
      payment: "7200cop/hora",
    },
    {
      userName: "Universidad de La Sabana",
      imgSrc:
        "https://image.winudf.com/v2/image/Y29tLnNhYmFuYS5hbmRyb2lkXzIuZHBzX3NjcmVlbnNob3RzXzBfNDM5MGE3NTQ/screen-0.jpg?h=355&fakeurl=1&type=.webp",
      type: "Presencial",
      categoryName: "Ingeniería",
      title: "Desarrollador web",
      text: text,
      payment: "7200cop/hora",
    },
    {
      userName: "Universidad de La Sabana",
      imgSrc:
        "https://image.winudf.com/v2/image/Y29tLnNhYmFuYS5hbmRyb2lkXzIuZHBzX3NjcmVlbnNob3RzXzBfNDM5MGE3NTQ/screen-0.jpg?h=355&fakeurl=1&type=.webp",
      type: "Presencial",
      categoryName: "Ingeniería",
      title: "Desarrollador web",
      text: text,
      payment: "7200cop/hora",
    },
    {
      userName: "Universidad de La Sabana",
      imgSrc:
        "https://image.winudf.com/v2/image/Y29tLnNhYmFuYS5hbmRyb2lkXzIuZHBzX3NjcmVlbnNob3RzXzBfNDM5MGE3NTQ/screen-0.jpg?h=355&fakeurl=1&type=.webp",
      type: "Presencial",
      categoryName: "Ingeniería",
      title: "Desarrollador web",
      text: text,
      payment: "7200cop/hora",
    },
    {
      userName: "Universidad de La Sabana",
      imgSrc:
        "https://image.winudf.com/v2/image/Y29tLnNhYmFuYS5hbmRyb2lkXzIuZHBzX3NjcmVlbnNob3RzXzBfNDM5MGE3NTQ/screen-0.jpg?h=355&fakeurl=1&type=.webp",
      type: "Presencial",
      categoryName: "Ingeniería",
      title: "Desarrollador web",
      text: text,
      payment: "7200cop/hora",
    },
    {
      userName: "Universidad de La Sabana",
      imgSrc:
        "https://image.winudf.com/v2/image/Y29tLnNhYmFuYS5hbmRyb2lkXzIuZHBzX3NjcmVlbnNob3RzXzBfNDM5MGE3NTQ/screen-0.jpg?h=355&fakeurl=1&type=.webp",
      type: "Presencial",
      categoryName: "Ingeniería",
      title: "Desarrollador web",
      text: text,
      payment: "7200cop/hora",
    },
    {
      userName: "Universidad de La Sabana",
      imgSrc:
        "https://image.winudf.com/v2/image/Y29tLnNhYmFuYS5hbmRyb2lkXzIuZHBzX3NjcmVlbnNob3RzXzBfNDM5MGE3NTQ/screen-0.jpg?h=355&fakeurl=1&type=.webp",
      type: "Presencial",
      categoryName: "Ingeniería",
      title: "Desarrollador web",
      text: text,
      payment: "7200cop/hora",
    },
    {
      userName: "Universidad de La Sabana",
      imgSrc:
        "https://image.winudf.com/v2/image/Y29tLnNhYmFuYS5hbmRyb2lkXzIuZHBzX3NjcmVlbnNob3RzXzBfNDM5MGE3NTQ/screen-0.jpg?h=355&fakeurl=1&type=.webp",
      type: "Presencial",
      categoryName: "Ingeniería",
      title: "Desarrollador web",
      text: text,
      payment: "7200cop/hora",
    },
    {
      userName: "Universidad de La Sabana",
      imgSrc:
        "https://image.winudf.com/v2/image/Y29tLnNhYmFuYS5hbmRyb2lkXzIuZHBzX3NjcmVlbnNob3RzXzBfNDM5MGE3NTQ/screen-0.jpg?h=355&fakeurl=1&type=.webp",
      type: "Presencial",
      categoryName: "Ingeniería",
      title: "Desarrollador web",
      text: text,
      payment: "7200cop/hora",
    },
    {
      userName: "Universidad de La Sabana",
      imgSrc:
        "https://image.winudf.com/v2/image/Y29tLnNhYmFuYS5hbmRyb2lkXzIuZHBzX3NjcmVlbnNob3RzXzBfNDM5MGE3NTQ/screen-0.jpg?h=355&fakeurl=1&type=.webp",
      type: "Presencial",
      categoryName: "Ingeniería",
      title: "Desarrollador web",
      text: text,
      payment: "7200cop/hora",
    },
    {
      userName: "Universidad de La Sabana",
      imgSrc:
        "https://image.winudf.com/v2/image/Y29tLnNhYmFuYS5hbmRyb2lkXzIuZHBzX3NjcmVlbnNob3RzXzBfNDM5MGE3NTQ/screen-0.jpg?h=355&fakeurl=1&type=.webp",
      type: "Presencial",
      categoryName: "Ingeniería",
      title: "Desarrollador web",
      text: text,
      payment: "7200cop/hora",
    },
  ];

  const pastJobs: IOffer[] = [
    {
      userName: "Globant",
      imgSrc:
        "https://pbs.twimg.com/profile_images/1542869063898202117/C88B5zcB_400x400.jpg",
      type: "Remoto",
      categoryName: "General",
      title: "Desarrollador UX/UI",
      text: text,
      payment: "1'500.000 COP",
    },
    {
      userName: "Universidad de La Sabana",
      imgSrc:
        "https://image.winudf.com/v2/image/Y29tLnNhYmFuYS5hbmRyb2lkXzIuZHBzX3NjcmVlbnNob3RzXzBfNDM5MGE3NTQ/screen-0.jpg?h=355&fakeurl=1&type=.webp",
      type: "Presencial",
      categoryName: "Ingeniería",
      title: "Desarrollador web",
      text: text,
      payment: "7200cop/hora",
    },
  ];

  return (
    <div className="profile">
      <ProfileTemplate
        mainInfo={mainInfoData}
        sideInfo={profileSideInfoData}
        bottomInfo={profileBottomInfoData}
        currentJobs={currentJobs}
        pastJobs={pastJobs}
      />
    </div>
  );
};

export default Profile;
