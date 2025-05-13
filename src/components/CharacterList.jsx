import { useEffect, useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import CharacterCard from "./CharacterCard";

const translations = {
  es: {
    gender: "Género",
    status: "Estado",
    all: "Todos",
    alive: "Vivo",
    dead: "Muerto",
    unknown: "Desconocido",
    male: "Hombre",
    female: "Mujer",
    characters: "Personajes",
    next: "Siguiente",
    prev: "Anterior",
    description:
      "El programa gira en torno a las aventuras de los miembros de la familia Smith, que consta de los padres Jerry y Beth, sus hijos Summer y Morty, y el padre de Beth, Rick Sanchez, quien vive con ellos como invitado. La familia vive en un suburbio del medio oeste estadounidense. Sin embargo, las aventuras de Rick y Morty ocurren en un número infinito de realidades, con los personajes viajando a otros planetas y dimensiones a través de portales y el platillo volador de Rick.",
  },
  en: {
    gender: "Gender",
    status: "Status",
    all: "All",
    alive: "Alive",
    dead: "Dead",
    unknown: "Unknown",
    male: "Male",
    female: "Female",
    characters: "Characters",
    next: "Next",
    description:
      "The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. The family lives in a suburb in the American Midwest. The adventures of Rick and Morty, however, take place across an infinite number of realities, with the characters traveling to other planets and dimensions through portals and Rick's flying saucer.",
  },
};

export default function CharacterList({ lang }) {
  const [page, setPage] = useState(1);
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const { data, fetchingData, loading, error } = useFetchApi();

  const t = translations[lang];

  useEffect(() => {
    setGender("");
    setStatus("");
    setPage(1);
  }, [lang]);

  useEffect(() => {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    if (gender) url += `&gender=${gender}`;
    if (status) url += `&status=${status}`;
    fetchingData(url);
  }, [page, gender, status]);

  return (
    <section>
      {/* Contenedor principal del título y descripción */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-start gap-[31px] px-4 md:px-0 mb-8">
        {/* Título responsivo */}
        <div className="w-full md:w-[426px]">
          <h2 className="font-poppins font-light text-[40px] md:text-[70px] leading-[100%] text-left break-words">
            {t.characters}
          </h2>
        </div>

        {/* Línea separadora */}
        <div className="w-full md:w-[554.5px] border-t border-white"></div>

        {/* Descripción responsiva */}
        <p className="w-full md:w-[781px] font-poppins font-light text-[14px] md:text-[15px] leading-[100%] text-left break-words">
          {t.description}
        </p>
      </div>

      {/* Contenedor de filtros alineado */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-wrap items-center gap-[15px] px-4 md:px-0 mb-8">
        {/* Filtros */}
        <select
          onChange={(e) => setGender(e.target.value)}
          className="w-[162px] h-[40px] rounded-[60px] border border-white/50 px-[30px] py-[10px] text-white text-[13px] font-poppins bg-[#1f1f1f] hover:bg-[#222] transition duration-200"
        >
          <option value="">
            {t.gender}: {t.all}
          </option>
          <option value="male">{t.male}</option>
          <option value="female">{t.female}</option>
          <option value="unknown">{t.unknown}</option>
        </select>

        <select
          onChange={(e) => setStatus(e.target.value)}
          className="w-[162px] h-[40px] rounded-[60px] border border-white/50 px-[30px] py-[10px] text-white text-[13px] font-poppins bg-[#1f1f1f] hover:bg-[#222] transition duration-200"
        >
          <option value="">
            {t.status}: {t.all}
          </option>
          <option value="alive">{t.alive}</option>
          <option value="dead">{t.dead}</option>
          <option value="unknown">{t.unknown}</option>
        </select>
      </div>

      {/* Resultados */}
      {loading ? (
        <p className="text-center text-gray-300">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between gap-y-6 px-4">
          {data?.results?.map((char) => (
            <CharacterCard key={char.id} character={char} lang={lang} />
          ))}
        </div>
      )}
      {/* Paginación con números en bloques de cinco */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-4 mt-30">
        {/* Números de página alineados con más espacio */}
        <div className="w-[175px] h-[25px] flex gap-[15px] justify-center">
          {Array.from({ length: data?.info?.pages }, (_, index) => index + 1)
            .slice(
              Math.floor((page - 1) / 5) * 5,
              Math.floor((page - 1) / 5) * 5 + 5
            )
            .map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={`w-[25px] h-[25px] rounded-[5px] bg-[#959595] text-black font-medium flex items-center justify-center hover:bg-[#777] transition duration-200`}
              >
                {num}
              </button>
            ))}
        </div>
      </div>

    <footer className="w-full flex flex-col justify-between px-[120px] py-[30px] bg-[#3F3F3F] mt-10">
      {/* Contenedor superior */}
      <div className="w-full flex justify-between items-center">
        {/* Logo totalmente a la izquierda */}
        <img src="/Logo1.png" alt="Rick & Morty Logo" className="w-[235px] h-[65px] self-start ml-0" />

        {/* Email */}
        <div className="text-white text-center">
          <p className="font-inter font-semibold text-[12px] leading-[100%]">Email</p>
          <p className="font-inter font-light text-[12px] leading-[100%]">mcordova@mail.com</p>
        </div>
      </div>

      {/* Línea separadora */}
      <div className="w-full border-t border-white border-opacity-50 mt-4"></div>

      {/* Contenedor inferior */}
      <div className="w-full flex justify-between items-center mt-4">
        {/* Aviso de Privacidad alineado a la izquierda */}
        <div className="w-[97px] h-[12px] bg-white text-black text-[10px] font-inter font-bold text-center flex items-center justify-center">
          Aviso de Privacidad
        </div>

        {/* Copyright */}
        <p className="font-inter font-light text-[12px] leading-[100%] text-white">
          ©2025 RickandMorty
        </p>
      </div>
    </footer>

    </section>
  );
}
