import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Layout() {
  const [lang, setLang] = useState("es");
  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  return (
    <div className="min-h-screen bg-[#111] text-white">
      <Navbar lang={lang} toggleLang={toggleLang} />
      <main className="p-6">
        <Outlet context={{ lang, toggleLang }} />
      </main>
    </div>
  );
}
