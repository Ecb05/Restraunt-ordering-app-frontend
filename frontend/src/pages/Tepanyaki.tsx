import { useState } from "react";

const teppanyakiDishes = [
  { id: 1, name: "Teriyaki Sirloin Steak", price: "12.25 £", category: "Beef", image: "/images/steak.jpg" },
  { id: 2, name: "Teriyaki Salmon Soba", price: "12.25 £", category: "Seafood", image: "/images/salmon.jpg" },
  { id: 3, name: "Ginger Chicken Udon", price: "9.50 £", category: "Chicken", image: "/images/udon.jpg" },
  { id: 4, name: "Yaki Soba", price: "8.25 £", category: "Veg", image: "/images/soba.jpg" },
  { id: 5, name: "Yasai Yaki Soba", price: "7.75 £", category: "Veg", image: "/images/yasai_soba.jpg" },
  { id: 6, name: "Cod Mokutan Soba", price: "8.75 £", category: "Seafood", image: "/images/cod_mokutan.jpg" }
];

const TeppanyakiPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredDishes =
    filter === "All" ? teppanyakiDishes : teppanyakiDishes.filter((dish) => dish.category === filter);

  return (
    <div className="min-h-screen bg-white flex flex-col pb-20">

      {/* Filter Section */}
      <div className="flex space-x-3 p-4 overflow-x-auto">
        {["All", "Beef", "Seafood", "Chicken", "Veg"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === category ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dishes Grid */}
      <div className="grid grid-cols-2 gap-4 px-4">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="bg-white p-2 rounded-lg shadow-md">
            <img src={dish.image} alt={dish.name} className="rounded-md w-full h-32 object-cover" />
            <p className="text-sm font-medium mt-2">{dish.name}</p>
            <p className="text-gray-500 text-sm">{dish.price}</p>
          </div>
        ))}
      </div>

      {/* Order Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white text-lg font-bold text-center py-3">
        Order
      </div>
    </div>
  );
};

export default TeppanyakiPage;

