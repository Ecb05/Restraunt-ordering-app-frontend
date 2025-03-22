import { useState } from "react";


const curryDishes = [
  { id: 1, name: "Prawn Raisukaree", price: "12.00 £", category: "Prawn", image: "/images/prawn_raisukaree.jpg" },
  { id: 2, name: "Chicken Raisukaree", price: "10.95 £", category: "Chicken", image: "/images/chicken_raisukaree.jpg" },
  { id: 3, name: "Firecracker Prawn", price: "11.00 £", category: "Prawn", image: "/images/firecracker_prawn.jpg" },
  { id: 4, name: "Firecracker Chicken", price: "9.95 £", category: "Chicken", image: "/images/firecracker_chicken.jpg" },
  { id: 5, name: "Vegetable Katsu Curry", price: "8.50 £", category: "Veg", image: "/images/veg_katsu_curry.jpg" }
];

const CurryPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredDishes =
    filter === "All" ? curryDishes : curryDishes.filter((dish) => dish.category === filter);

  return (
    <div className="min-h-screen bg-white flex flex-col pb-20">
      

      {/* Filter Section */}
      <div className="flex space-x-3 p-4 overflow-x-auto">
        {["All", "Chicken", "Prawn", "Veg"].map((category) => (
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

export default CurryPage;
