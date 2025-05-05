import React, { useState } from "react";


function Admin() {
  const [formData, setFormData] = useState({
    adminKey: "",
    title: "",
    description: "",
    developer: "",
    genre: "",
    platform: "",
    minRequirements: {
      os: "",
      processor: "",
      ram: "",
      gpu: "",
      storage: "",
      internet: "",
    },
    recommendedRequirements: {
      os: "",
      processor: "",
      ram: "",
      gpu: "",
      storage: "",
      internet: "",
    },
    downloadLink: "",
    imageUrl: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNestedChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/games", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setMessage("✅ Juego subido correctamente");
      setFormData({
        adminKey: "",
        title: "",
        description: "",
        developer: "",
        genre: "",
        platform: "",
        minRequirements: {
          os: "",
          processor: "",
          ram: "",
          gpu: "",
          storage: "",
          internet: "",
        },
        recommendedRequirements: {
          os: "",
          processor: "",
          ram: "",
          gpu: "",
          storage: "",
          internet: "",
        },
        downloadLink: "",
        imageUrl: "",
      });
    } else {
      setMessage(`❌ Error: ${result.message}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Panel de Administrador</h2>
      {message && <div className="mb-4 text-center text-sm text-gray-700">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Datos generales */}
        <div className="space-y-4">
          <input
            name="adminKey"
            placeholder="Clave de admin"
            value={formData.adminKey}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            name="title"
            placeholder="Título del juego"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="description"
            placeholder="Descripción"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24"
          />
          <input
            name="developer"
            placeholder="Desarrollador"
            value={formData.developer}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            name="genre"
            placeholder="Género"
            value={formData.genre}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            name="platform"
            placeholder="Plataforma"
            value={formData.platform}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Requisitos Mínimos */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Requisitos Mínimos</h3>
          {["os", "processor", "ram", "gpu", "storage", "internet"].map((field) => (
            <input
              key={field}
              placeholder={field === "internet" ? "¿Requiere Internet?" : field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData.minRequirements[field]}
              onChange={(e) => handleNestedChange("minRequirements", field, e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          ))}
        </div>

        {/* Requisitos Recomendados */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Requisitos Recomendados</h3>
          {["os", "processor", "ram", "gpu", "storage", "internet"].map((field) => (
            <input
              key={field}
              placeholder={field === "internet" ? "¿Requiere Internet?" : field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData.recommendedRequirements[field]}
              onChange={(e) => handleNestedChange("recommendedRequirements", field, e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          ))}
        </div>

        {/* Otros datos */}
        <div className="space-y-4">
          <input
            name="downloadLink"
            placeholder="Link de descarga"
            value={formData.downloadLink}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            name="imageUrl"
            placeholder="URL de la imagen"
            value={formData.imageUrl}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Subir Juego
          </button>
        </div>
      </form>
    </div>
  );
}

export default Admin;
