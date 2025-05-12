import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import AuthRoute from "./components/AuthRoute";
import Layout from "./components/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas envueltas en layout */}
        <Route element={<AuthRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
