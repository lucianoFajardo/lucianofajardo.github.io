type Props = {
  title: string;
  subtitle: string;
  description: string;
  imgUrl: string;
  imgAuth: string;
  author: string;
  date: string;
  urlWeb: string;
};

export const proyectType: Props[] = [
  {
    title: "Proyecto Landing Page Veterinario",
    subtitle:
      "Pagina para una mostrar los servicios de su veterinaria y facilitar la interacción con los clientes",
    description:
      "Esta landing page está diseñada para mostrar los servicios de la veterinaria y facilitar la interacción con los clientes. Incluye secciones para los servicios ofrecidos, información de contacto y ubicación. ",
    imgUrl: "/VetPage.png",
    imgAuth: "/Img-GitHub.png",
    author: "Luciano Fajardo",
    date: "Octubre 2026",
    urlWeb: "https://vetlandingpages.netlify.app/",
  },
];
export default proyectType;
