import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

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
    <nav className="bg-black px-6 py-4 flex flex-wrap justify-between items-center border-b border-gray-700">
      {/* Logo */}
      <div className="flex-shrink-0 mb-4 md:mb-0">
        <img
          src="/Logo1.png"
          alt="Rick & Morty Logo"
          className="w-[265px] h-[94px] object-contain"
        />
      </div>

      {/* Enlaces de navegación */}
      <div className="order-2 md:order-1 w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0">
        <ul className="flex flex-wrap md:flex-nowrap gap-[15px] w-fit md:w-[293px] h-[50px] rounded-full border border-white px-[15px] py-[10px] items-center justify-center">
          <li className="w-[78px] h-[30px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-[#00FF00] font-semibold" : "text-white hover:text-[#00FF00]"} text-[13px] font-poppins w-full h-full flex items-center justify-center px-[10px] py-[5px]`
              }
            >
              {lang === "es" ? "Inicio" : "Home"}
            </NavLink>
          </li>
          <li className="w-[78px] h-[30px]">
            <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                `${isActive ? "text-[#00FF00] font-semibold" : "text-white hover:text-[#00FF00]"} text-[13px] font-poppins w-full h-full flex items-center justify-center px-[5px] py-[5px]`
              }
            >
              {lang === "es" ? "Nosotros" : "About Us"}
            </NavLink>
          </li>
          <li className="w-[78px] h-[30px]">
            <NavLink
              to="/contactUs"
              className={({ isActive }) =>
                `${isActive ? "text-[#00FF00] font-semibold" : "text-white hover:text-[#00FF00]"} text-[13px] font-poppins w-full h-full flex items-center justify-center px-[5px] py-[4px]`
              }
            >
              {lang === "es" ? "Contactanos" : "Contact Us"}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Botones de idioma y logout */}
      <div className="order-3 md:order-2 w-full md:w-auto flex justify-center md:justify-end gap-4">
        <button
          onClick={toggleLang}
          className="w-[128px] h-[40px] rounded-full border border-white/50 px-[30px] py-[10px] text-white text-[13px] font-poppins hover:bg-white hover:text-black transition duration-200"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
        <button
          onClick={handleLogout}
          className="w-[128px] h-[40px] rounded-full border border-white/50 px-[30px] py-[10px] text-white text-[13px] font-poppins hover:bg-white hover:text-black transition duration-200"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
