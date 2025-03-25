import { useState, useEffect } from "react";
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

export default function Home() {
  const [dishes, setDishes] = useState<Dish[]>([]);
  

  // Fetch data from the JSON file
  useEffect(() => {
    const loadDishes = async () => {
      try {
        const data = await fetchData("popular");
        setDishes(data);
      } catch (error) {
        console.error("Error fetching Popular dishes data:", error);
      }
    };

    loadDishes();
  }, []);
 
  return (
    <div className="min-h-screen bg-white flex flex-col pb-20">
      {/* Filter Section */}
      

      {/* Menu Items */}
      {dishes.length > 0 ? (
        <MenuItemGrid dishes={dishes} />
      ) : (
        <p className="text-center text-gray-500 mt-10">No items available.</p>
      )}

      {/* Order Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white text-lg font-bold text-center py-3">
        Order
      </div>
    </div>
  );
}
