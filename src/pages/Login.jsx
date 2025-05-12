import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirige al home tras login exitoso
    } catch (err) {
      console.error(err);
      setError("Correo o contraseña inválidos.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#171717] overflow-hidden flex items-center justify-center p-4">
      {/* Contenedor central más compacto */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-[30px] overflow-hidden shadow-2xl">
        
        {/* Imagen visible siempre */}
        <div className="w-full md:w-[45%] h-[200px] md:h-[500px]">
          <img
            src="/fondo-login.png"
            alt="Login Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Formulario */}
        <div className="w-full md:w-[55%] bg-[#181818] p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-[40px] leading-[40px] w-full md:w-[467px] font-light text-white tracking-normal mb-4 font-poppins">
            Log In
          </h2>
          <p className="text-[15px] leading-[15px] w-full md:w-[467px] font-light text-gray-400 mb-6 tracking-normal font-poppins">
            Por favor ingresa tu nombre de usuario y contraseña
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white py-2">
                Usuario
              </label>
              <input
                type="email"
                className="w-full px-[19px] py-[15px] border border-white rounded-[60px] bg-transparent text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#00FF00] focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white py-2">
                Contraseña
              </label>
              <input
                type="password"
                className="w-full px-[19px] py-[15px] border border-white rounded-[60px] bg-transparent text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#00FF00] focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full px-[19px] py-[15px] border border-white rounded-[60px] bg-white text-black hover:bg-[#00FF00] hover:text-white transition duration-200 mt-3"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
