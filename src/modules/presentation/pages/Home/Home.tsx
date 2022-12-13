import HomeTemplate from "../../templates/Home/Home";
import { ICategory } from "../../components/molecules/CategoryCard/ICategory";
import { IOffer } from "../../components/organisms/OfferCard/IOffer";

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
      categoryImgUrl:
        "https://firebasestorage.googleapis.com/v0/b/meetu_main_storage/o/categoriesImages%2FIngenieria.png?alt=media&token=41243f32-0337-4764-9266-5e78d62b9aec",
      categoryTitle: "Ingeniería",
      categoryColor: "#FFD0D0",
      titleColor: "#FF0000",
      cardWidth: "88%",
    },
    {
      categoryImgUrl:
        "https://firebasestorage.googleapis.com/v0/b/meetu_main_storage/o/categoriesImages%2FMedicina.png?alt=media&token=3cd96b85-0fef-4702-928f-a3629357b3f0",
      categoryTitle: "Medicina",
      categoryColor: "#D8EFFF",
      titleColor: "#0094FF",
      cardWidth: "78%",
    },
    {
      categoryImgUrl:
        "https://firebasestorage.googleapis.com/v0/b/meetu_main_storage/o/categoriesImages%2FAdministracion.png?alt=media&token=bc3a2703-50a1-42c6-b1c1-4148710f011b",
      categoryTitle: "Administración",
      categoryColor: "#DCFFE0",
      titleColor: "#5ACD00",
      cardWidth: "100%",
    },
    {
      categoryImgUrl:
        "https://firebasestorage.googleapis.com/v0/b/meetu_main_storage/o/categoriesImages%2FPsicologia.png?alt=media&token=6ce20401-a438-4afa-ba14-493bfacb0704",
      categoryTitle: "Psicología",
      categoryColor: "#F2E6F7",
      titleColor: "#B400FF",
      cardWidth: "83%",
    },
    {
      categoryImgUrl:
        "https://firebasestorage.googleapis.com/v0/b/meetu_main_storage/o/categoriesImages%2FComunicacion.png?alt=media&token=fa294924-c490-491f-90c9-234803a5d300",
      categoryTitle: "Comunicación",
      categoryColor: "#FFF4BA",
      titleColor: "#FFC700",
      cardWidth: "100%",
    },
    {
      categoryImgUrl:
        "https://firebasestorage.googleapis.com/v0/b/meetu_main_storage/o/categoriesImages%2FPsicologia.png?alt=media&token=6ce20401-a438-4afa-ba14-493bfacb0704",
      categoryTitle: "Psicología",
      categoryColor: "#F2E6F7",
      titleColor: "#B400FF",
      cardWidth: "83%",
    },
    {
      categoryImgUrl:
        "https://firebasestorage.googleapis.com/v0/b/meetu_main_storage/o/categoriesImages%2FMedicina.png?alt=media&token=3cd96b85-0fef-4702-928f-a3629357b3f0",
      categoryTitle: "Medicina",
      categoryColor: "#D8EFFF",
      titleColor: "#0094FF",
      cardWidth: "78%",
    },
    {
      categoryImgUrl:
        "https://firebasestorage.googleapis.com/v0/b/meetu_main_storage/o/categoriesImages%2FIngenieria.png?alt=media&token=41243f32-0337-4764-9266-5e78d62b9aec",
      categoryTitle: "Ingeniería",
      categoryColor: "#FFD0D0",
      titleColor: "#FF0000",
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
