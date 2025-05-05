import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa"; // Icono de play

function GameCard({ game }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/game/${game._id}`)}
      className="cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
    >
      <img
        src={game.imageUrl}
        alt={game.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">{game.title}</h2>
        <FaPlayCircle className="text-2xl text-blue-600 cursor-pointer hover:text-blue-800" />
      </div>
    </div>
  );
}

export default GameCard;
