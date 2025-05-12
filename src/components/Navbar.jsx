import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useState } from "react";

export default function Navbar({ lang, toggleLang }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-[#00FF00] font-semibold"
      : "text-white hover:text-[#00FF00]";

  return (
    <nav className="bg-black px-6 py-4 flex justify-between items-center border-b border-gray-700">
      <h1 className="text-xl text-white font-bold">Rick & Morty App</h1>

      <ul className="flex gap-6 text-sm font-medium font-poppins">
        <li>
          <NavLink to="/" className={linkStyle}>
            {lang === "es" ? "Inicio" : "Home"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutUs" className={linkStyle}>
            {lang === "es" ? "Sobre Nosotros" : "About Us"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactUs" className={linkStyle}>
            {lang === "es" ? "Contáctame" : "Contact Me"}
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleLang}
          className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-600"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-500"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
