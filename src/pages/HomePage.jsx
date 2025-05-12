import { useState } from "react";
import Navbar from "../components/Navbar";
import CharacterList from "../components/CharacterList"; // si ya lo dividiste
// importa otros componentes si ya los tienes

export default function Home() {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white">
      {/* Aquí sigue el resto del Home */}
      <main className="p-6">
        <CharacterList lang={language} />
      </main>
    </div>
  );
}
