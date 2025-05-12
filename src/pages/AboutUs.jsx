import { useOutletContext } from "react-router-dom";

export default function AboutUs() {
  const { lang } = useOutletContext();

  const content = {
    es: {
      title: "Sobre Nosotros",
      description:
        "Somos una plataforma dedicada a brindar información detallada sobre los personajes de Rick & Morty. Nuestro objetivo es ofrecer una experiencia interactiva y educativa para los fans de la serie.",
    },
    en: {
      title: "About Us",
      description:
        "We are a platform dedicated to providing detailed information about Rick & Morty characters. Our goal is to offer an interactive and educational experience for fans of the series.",
    },
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-6 text-white">
      <h2 className="text-4xl font-bold mb-6 font-poppins text-center">
        {content[lang].title}
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed text-center">
        {content[lang].description}
      </p>
    </section>
  );
}
