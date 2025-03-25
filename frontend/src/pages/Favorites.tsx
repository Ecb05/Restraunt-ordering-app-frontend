import { useState, useEffect } from "react";
import ItemModal from "../components/ItemModal";
import { FaHeart } from "react-icons/fa";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(savedFavorites);
  }, []);

  // Remove from favorites
  const removeFromFavorites = (itemId: number) => {
    const updatedFavorites = favorites.filter((item) => item.id !== itemId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col pb-20">
      <h1 className="text-black text-2xl font-bold mb-6">Your Favorites ❤️</h1>
 
      {favorites.length === 0 ? (
        <p className="text-gray-500">You have no favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg p-4">
              {/* Item Image */}
              <img
                src={item.image}
                alt={item.name}
                className="rounded-lg w-full h-40 object-cover"
                onClick={() => setSelectedItem(item)}
              />
              <h2 className="text-gray-600 font-semibold mt-2">{item.name}</h2>
              <p className="text-gray-600">£{item.price}</p>

              {/* Remove from Favorites Button */}
              <button
                className="sm-4 text-red-500 flex items-center"
                onClick={() => removeFromFavorites(item.id)}
              >
                <FaHeart size={20} />
                <span className="ml-2">Remove</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Item Modal */}
      {selectedItem && (
        <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default FavoritesPage;
