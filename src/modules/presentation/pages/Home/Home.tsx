import { ICategory } from "../../components/molecules/CategoryCard/ICategory";

import { IOffer } from "../../components/organisms/OfferCard/IOffer";

import HomeTemplate from "../../templates/Home/Home";

const Home = () => {
  const carrouselSlides: JSX.Element[] = [...Array(5)].map((i, index) => (
    <div>Slide {index + 1}</div>
  ));

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta luctus sapien, sed aliquet mauris venenatis vitae. Cras eget molestie leo. Nullam luctus, magna vel ultricies cursus, nisl ex pretium odio, id placerat lectus diam id augue. Mauris non erat sodales, condimentum diam";

  const recentPosts: IOffer[] = [
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

  const categories: ICategory[] = [
    {
      img: {
        url: "https://firebasestorage.googleapis.com/v0/b/meetu_main_storage/o/categoriesImages%2FIngenieria.png?alt=media&token=41243f32-0337-4764-9266-5e78d62b9aec",
        width: "140px",
        top: "-55px",
        left: "20px",
      },
      title: {
        title: "Ingeniería",
        color: "#FF0000",
      },
      categoryColor: "#FFD0D0",
      cardWidth: "88%",
    },
    {
      img: {
        url: "https://firebasestorage.googleapis.com/v0/b/meetu_main_storage/o/categoriesImages%2FMedicina.png?alt=media&token=3cd96b85-0fef-4702-928f-a3629357b3f0",
        width: "140px",
        top: "-55px",
        left: "20px",
      },
      title: {
        title: "Medicina",
        color: "#0094FF",
      },
      categoryColor: "#D8EFFF",
      cardWidth: "78%",
    },
    {
      img: {
        url: "https://firebasestorage.googleapis.com/v0/b/meetu_main_storage/o/categoriesImages%2FAdministracion.png?alt=media&token=bc3a2703-50a1-42c6-b1c1-4148710f011b",
        width: "140px",
        top: "-55px",
        left: "20px",
      },
      title: {
        title: "Administración",
        color: "#5ACD00",
      },
      categoryColor: "#DCFFE0",
      cardWidth: "100%",
    },
    {
      img: {
        url: "https://firebasestorage.googleapis.com/v0/b/meetu_main_storage/o/categoriesImages%2FPsicologia.png?alt=media&token=6ce20401-a438-4afa-ba14-493bfacb0704",
        width: "140px",
        top: "-55px",
        left: "20px",
      },
      title: {
        title: "Psicología",
        color: "#B400FF",
      },
      categoryColor: "#F2E6F7",
      cardWidth: "83%",
    },
    {
      img: {
        url: "https://firebasestorage.googleapis.com/v0/b/meetu_main_storage/o/categoriesImages%2FComunicacion.png?alt=media&token=fa294924-c490-491f-90c9-234803a5d300",
        width: "140px",
        top: "-55px",
        left: "20px",
      },
      title: {
        title: "Comunicación",
        color: "#FFC700",
      },
      categoryColor: "#FFF4BA",
      cardWidth: "100%",
    },
    {
      img: {
        url: "https://firebasestorage.googleapis.com/v0/b/meetu_main_storage/o/categoriesImages%2FPsicologia.png?alt=media&token=6ce20401-a438-4afa-ba14-493bfacb0704",
        width: "140px",
        top: "-55px",
        left: "20px",
      },
      title: {
        title: "Psicología",
        color: "#B400FF",
      },
      categoryColor: "#F2E6F7",
      cardWidth: "83%",
    },
    {
      img: {
        url: "https://firebasestorage.googleapis.com/v0/b/meetu_main_storage/o/categoriesImages%2FMedicina.png?alt=media&token=3cd96b85-0fef-4702-928f-a3629357b3f0",
        width: "140px",
        top: "-55px",
        left: "20px",
      },
      title: {
        title: "Medicina",
        color: "#0094FF",
      },
      categoryColor: "#D8EFFF",
      cardWidth: "78%",
    },
    {
      img: {
        url: "https://firebasestorage.googleapis.com/v0/b/meetu_main_storage/o/categoriesImages%2FIngenieria.png?alt=media&token=41243f32-0337-4764-9266-5e78d62b9aec",
        width: "140px",
        top: "-55px",
        left: "20px",
      },
      title: {
        title: "Ingeniería",
        color: "#FF0000",
      },
      categoryColor: "#FFD0D0",
      cardWidth: "88%",
    },
  ];

  return (
    <div className="home">
      <HomeTemplate
        carrouselSlides={carrouselSlides}
        categories={categories}
        recentPosts={recentPosts}
      />
    </div>
  );
};

export default Home;
