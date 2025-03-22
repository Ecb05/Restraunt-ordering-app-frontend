import { useState } from "react";


const ramenDishes = [
  { id: 1, name: "Shoyu Ramen", price: "11.50 £", category: "Chicken", image: "/images/shoyu_ramen.jpg" },
  { id: 2, name: "Tonkotsu Ramen", price: "12.95 £", category: "Non-Veg", image: "/images/tonkotsu_ramen.jpg" },
  { id: 3, name: "Miso Ramen", price: "10.50 £", category: "Veg", image: "/images/miso_ramen.jpg" },
  { id: 4, name: "Spicy Ramen", price: "9.95 £", category: "Chicken", image: "/images/spicy_ramen.jpg" },
  { id: 5, name: "Seafood Ramen", price: "13.50 £", category: "Prawn", image: "/images/seafood_ramen.jpg" }
];

const RamenPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredDishes =
    filter === "All" ? ramenDishes : ramenDishes.filter((dish) => dish.category === filter);

  return (
    <div className="min-h-screen bg-white flex flex-col pb-20">
      

      {/* Filter Section */}
      <div className="flex space-x-3 p-4 overflow-x-auto">
        {["All", "Chicken", "Prawn", "Non-Veg", "Veg"].map((category) => (
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

export default RamenPage;
