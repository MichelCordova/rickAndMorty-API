import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function AuthRoute() {
  const user = useUser();

  if (user === undefined) {
    return <div className="text-white p-10">Cargando...</div>; // o un spinner lindo
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
}
