export default function CharacterCard({ character, lang }) {
  const { name, status, species, image, gender } = character;

  // Traducciones simples
  const translate = {
    es: {
      status: {
        Alive: "Vivo",
        Dead: "Muerto",
        unknown: "Desconocido",
      },
      gender: {
        Male: "Hombre",
        Female: "Mujer",
        unknown: "Desconocido",
      },
    },
    en: {
      status: {
        Alive: "Alive",
        Dead: "Dead",
        unknown: "Unknown",
      },
      gender: {
        Male: "Male",
        Female: "Female",
        unknown: "Unknown",
      },
    },
  };

  return (
    <div className="bg-[#181818] rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-[1.02]">
      <img
        src={image}
        alt={name}
        className="w-full h-[300px] object-cover object-top"
      />
      <div className="p-4 space-y-1">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-sm text-gray-400">
          {translate[lang].status[status] || status} - {species}
        </p>
        <p className="text-sm text-gray-400">
          {translate[lang].gender[gender] || gender}
        </p>
      </div>
    </div>
  );
}
