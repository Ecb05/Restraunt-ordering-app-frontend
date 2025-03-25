import { useState,useEffect } from "react";
import fetchData from "../utils/fetchData";
import MenuItemGrid from "../components/MenuItemGrid";

interface Dish {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
}


const RamenPage = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [filter, setFilter] = useState<string>("All");

  // Fetch data from the JSON file
  useEffect(() => {
    const loadDishes = async () => {
      try {
        const data = await fetchData("ramen");
        setDishes(data);
      } catch (error) {
        console.error("Error fetching Curry data:", error);
      }
    };

    loadDishes();
  }, []);

  // Filter the dishes
  const filteredDishes =
    filter === "All" ? dishes : dishes.filter((dish) => dish.category === filter);

  return (
    <div className="min-h-screen bg-white flex flex-col pb-20">
      {/* Filter Section */}
      <div className="flex space-x-3 p-4 overflow-x-auto">
        {["All", "Pork","Duck", "Chicken", "Prawn", "Veg"].map((category) => (
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

      {/* Menu Items */}
      {filteredDishes.length > 0 ? (
        <MenuItemGrid dishes={filteredDishes} />
      ) : (
        <p className="text-center text-gray-500 mt-10">No items available.</p>
      )}

      {/* Order Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white text-lg font-bold text-center py-3">
        Order
      </div>
    </div>
  );
};
export default RamenPage;
