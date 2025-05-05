import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";
import { FaSearch } from "react-icons/fa"; // Icono de búsqueda

function Home() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    /*fetch("http://localhost:5000/api/games")*/
    fetch("https://backend-irongames.onrender.com/api/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">Juegos</h1>
      
      <div className="flex justify-center mb-6">
        <SearchBar search={search} setSearch={setSearch} />
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filteredGames.map((game) => (
          <GameCard key={game._id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Home;
