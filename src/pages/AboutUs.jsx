import { useOutletContext } from "react-router-dom";

export default function AboutUs() {
  const { lang } = useOutletContext();

  const content = {
    es: {
      title: "Nosotros",
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
    <div className="relative w-full h-screen">
      {/* Imagen de fondo sin afectar el Navbar */}
      <div className="absolute inset-0 bg-[url('/contactUs.png')] bg-cover bg-center w-full h-screen overflow-hidden"></div>

      {/* Contenedor del contenido para que quede sobre la imagen */}
      <div className="relative flex flex-col justify-center items-center h-full text-white">
        {/* Texto con fondo semitransparente para mejorar legibilidad */}
        <div className="max-w-4xl text-center px-6 bg-black/50 p-6 rounded-lg">
          <h2 className="text-4xl font-bold mb-6 font-poppins">{content[lang].title}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{content[lang].description}</p>
        </div>
      </div>
    </div>
  );
}