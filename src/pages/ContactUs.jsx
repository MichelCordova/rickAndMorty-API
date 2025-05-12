import { useOutletContext } from "react-router-dom";
import { useState } from "react";

export default function ContactUs() {
  const { lang } = useOutletContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const labels = {
    es: {
      title: "Contáctame",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      submit: "Enviar",
    },
    en: {
      title: "Contact Me",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
    // Reiniciar el formulario
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-[#171717] max-w-3xl mx-auto py-12 px-6 text-white">
      <h2 className="text-4xl font-bold mb-6 font-poppins text-center">
        {labels[lang].title}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium">
            {labels[lang].name}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#1f1f1f] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00FF00]"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">
            {labels[lang].email}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#1f1f1f] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00FF00]"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">
            {labels[lang].message}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 rounded bg-[#1f1f1f] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00FF00]"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#00FF00] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#00cc00] transition"
        >
          {labels[lang].submit}
        </button>
      </form>
    </section>
  );
}