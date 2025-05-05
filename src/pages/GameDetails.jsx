import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Importamos los íconos de Heroicons
import { CpuChipIcon, ServerIcon, DevicePhoneMobileIcon , ComputerDesktopIcon , ArrowDownCircleIcon, WifiIcon, CubeTransparentIcon   } from "@heroicons/react/24/outline";




function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    /*fetch(`http://localhost:5000/api/games/${id}`)*/
    fetch(`https://backend-irongames.onrender.com/api/games/${id}`)
      .then((res) => res.json())
      .then((data) => setGame(data))
      .catch((err) => console.error("Error cargando juego:", err));
  }, [id]);

  if (!game) return <div className="text-center mt-10">Cargando...</div>;

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Título del juego */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">{game.title}</h1>
      
      {/* Imagen del juego */}
      <img
        src={game.imageUrl}
        alt={game.title}
        className="w-full max-w-xl mx-auto mb-8 rounded-lg shadow-lg"
      />

      {/* Descripción del juego */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">📝 Descripción</h2>
          <p className="text-gray-700">{game.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">🎮 Desarrollador</h2>
          <p className="text-gray-700">{game.developer}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">🧩 Género</h2>
          <p className="text-gray-700">{game.genre}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">💻 Plataforma</h2>
          <p className="text-gray-700">{game.platform}</p>
        </div>
      </div>

            {/* Requisitos del sistema */}
        <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Requisitos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mínimos */}
            <div>
            <h3 className="font-semibold text-lg text-gray-800">Mínimos</h3>
            <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-700 shadow-md">
                <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                    <CpuChipIcon className="h-5 w-5 text-blue-500" />
                    <span className="font-bold">Procesador:</span>
                    <span>{game.minRequirements.processor}</span>
                </li>
                <li className="flex items-start space-x-3">
                    <CubeTransparentIcon  className="h-5 w-5 text-blue-500" />
                    <span className="font-bold">GPU:</span>
                    <span>{game.minRequirements.gpu}</span>
                </li>
                <li className="flex items-start space-x-3">
                    <ServerIcon className="h-5 w-5 text-blue-500" />
                    <span className="font-bold">Memoria:</span>
                    <span>{game.minRequirements.ram}</span>
                </li>
                <li className="flex items-start space-x-3">
                    <ComputerDesktopIcon className="h-5 w-5 text-blue-500" />
                    <span className="font-bold">SO:</span>
                    <span>{game.minRequirements.os}</span>
                </li>
                <li className="flex items-start space-x-3">
                    <ComputerDesktopIcon className="h-5 w-5 text-blue-500" />
                    <span className="font-bold">Almacenamiento:</span>
                    <span>{game.minRequirements.storage}</span>
                </li>
                <li className="flex items-start space-x-3">
                    <WifiIcon className="h-5 w-5 text-blue-500" />
                    <span className="font-bold">Red:</span>
                    <span>{game.minRequirements.internet}</span>
                </li>
                </ul>
            </div>
            </div>

            {/* Recomendados */}
            <div>
            <h3 className="font-semibold text-lg text-gray-800">Recomendados</h3>
            <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-700 shadow-md">
                <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                    <CpuChipIcon className="h-5 w-5 text-blue-500" />
                    <span className="font-bold">Procesador:</span>
                    <span>{game.recommendedRequirements.processor}</span>
                </li>
                <li className="flex items-start space-x-3">
                    <CubeTransparentIcon  className="h-5 w-5 text-blue-500" />
                    <span className="font-bold">GPU:</span>
                    <span>{game.minRequirements.gpu}</span>
                </li>
                <li className="flex items-start space-x-3">
                    <ServerIcon className="h-5 w-5 text-blue-500" />
                    <span className="font-bold">Memoria:</span>
                    <span>{game.recommendedRequirements.ram}</span>
                </li>
                <li className="flex items-start space-x-3">
                    <ComputerDesktopIcon className="h-5 w-5 text-blue-500" />
                    <span className="font-bold">SO:</span>
                    <span>{game.recommendedRequirements.os}</span>
                </li>
                <li className="flex items-start space-x-3">
                    <ComputerDesktopIcon className="h-5 w-5 text-blue-500" />
                    <span className="font-bold">Almacenamiento:</span>
                    <span>{game.recommendedRequirements.storage}</span>
                </li>
                <li className="flex items-start space-x-3">
                    <WifiIcon className="h-5 w-5 text-blue-500" />
                    <span className="font-bold">Red:</span>
                    <span>{game.minRequirements.internet}</span>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>


      {/* Botón de descarga */}
      <div className="flex justify-center mt-8">
        <a
          href={game.downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          
        >
          Descargar
        </a>
      </div>
    </div>
  );
}

export default GameDetail;
