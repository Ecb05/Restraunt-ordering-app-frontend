import { useEffect, useState } from "react";
import { FaTimes, FaHeart } from "react-icons/fa";

const ItemModal = ({ item, onClose }: { item: any; onClose: () => void }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if the item is in favorites on load
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isFav = favorites.some((fav: any) => fav.id === item.id);
    setIsFavorite(isFav);
  }, [item]);

  // Toggle favorite status
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav: any) => fav.id !== item.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favorites.push(item);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-6 overflow-y-auto max-h-[85vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition duration-200"
        >
          <FaTimes size={20} />
        </button>

        {/* Heart Icon for Favorites */}
        <button
          onClick={toggleFavorite}
          className={`absolute top-4 left-4 ${isFavorite ? "text-red-500" : "text-gray-400"} hover:text-red-500 transition duration-200`}
        >
          <FaHeart size={24} />
        </button>

        {/* Image and Info */}
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="rounded-lg w-full h-48 object-cover mb-4"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
            No Image Available
          </div>
        )}

        <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
        <p className="text-gray-600 text-lg mt-2">£{item.price}</p>
        <p className="text-gray-500 mt-4 leading-relaxed">{item.description}</p>

        {/* Add to Cart Button */}
        <button className="mt-6 bg-black text-white py-3 px-6 rounded-lg w-full hover:bg-gray-800 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
