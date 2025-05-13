import { useOutletContext } from "react-router-dom";
import CharacterList from "../components/CharacterList";

export default function Home() {
  const { lang } = useOutletContext();
;

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white">
      <main className="p-6">
        <CharacterList lang={lang} />
      </main>
    </div>
  );
}