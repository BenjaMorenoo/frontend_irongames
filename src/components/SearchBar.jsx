import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <div className="flex items-center border border-gray-300 rounded px-3 py-2">
      <FaSearch className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Buscar juego..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full outline-none"
      />
    </div>
  );
}

export default SearchBar;
