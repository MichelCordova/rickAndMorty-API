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
    prev: "Previous",
  },
};

export default function CharacterList({ lang }) {
  const [page, setPage] = useState(1);
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const { data, fetchingData, loading, error } = useFetchApi();

  const t = translations[lang];

  useEffect(() => {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    if (gender) url += `&gender=${gender}`;
    if (status) url += `&status=${status}`;
    fetchingData(url);
  }, [page, gender, status]);

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6 font-poppins text-center">{t.characters}</h2>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <select
          onChange={(e) => setGender(e.target.value)}
          className="px-4 py-2 rounded bg-[#1f1f1f] text-white border border-gray-600"
        >
          <option value="">{t.gender}: {t.all}</option>
          <option value="male">{t.male}</option>
          <option value="female">{t.female}</option>
          <option value="unknown">{t.unknown}</option>
        </select>

        <select
          onChange={(e) => setStatus(e.target.value)}
          className="px-4 py-2 rounded bg-[#1f1f1f] text-white border border-gray-600"
        >
          <option value="">{t.status}: {t.all}</option>
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
        <div className="flex flex-wrap justify-between gap-6 max-w-[1200px] mx-auto">
          {data?.results?.map((char) => (
            <CharacterCard key={char.id} character={char} lang={lang} />
          ))}
        </div>
      )}

      {/* Paginación */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={!data?.info?.prev}
          className="px-4 py-2 rounded bg-[#222] hover:bg-[#333] text-white disabled:opacity-40"
        >
          {t.prev}
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={!data?.info?.next}
          className="px-4 py-2 rounded bg-[#222] hover:bg-[#333] text-white disabled:opacity-40"
        >
          {t.next}
        </button>
      </div>
    </section>
  );
}
