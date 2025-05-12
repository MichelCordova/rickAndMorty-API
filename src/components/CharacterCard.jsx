export default function CharacterCard({ character, lang }) {
  const { name, status, species, image, gender } = character;

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
    <div className="w-[323px] h-[421px] rounded-[20px] border border-white overflow-hidden shadow-lg transition-transform hover:scale-[1.02] flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-[263px] h-[301px] object-cover object-top"
      />
      <div className="flex flex-col items-center justify-center px-4 py-2 space-y-1 text-center">
        <h3 className="text-[30px] font-light font-poppins text-white leading-[100%]">
          {name}
        </h3>
        <p className="text-[30px] font-light font-poppins text-white leading-[100%]">
          {translate[lang].status[status] || status} - {species}
        </p>
        <p className="text-[30px] font-light font-poppins text-white leading-[100%]">
          {translate[lang].gender[gender] || gender}
        </p>
      </div>
    </div>
  );
}
