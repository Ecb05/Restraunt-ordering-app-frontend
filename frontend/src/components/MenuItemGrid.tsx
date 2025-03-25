import { useState } from "react";
import ItemModal from "./ItemModal";

type Dish = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
};

interface MenuItemGridProps {
  dishes: Dish[];
}

const MenuItemGrid = ({ dishes }: MenuItemGridProps) => {
  const [selectedItem, setSelectedItem] = useState<Dish | null>(null);

  return (
    <div className="relative">
      {/* Dishes Grid */}
      <div className="grid grid-cols-2 gap-4 px-4">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white p-2 rounded-lg shadow-md cursor-pointer"
            onClick={() => setSelectedItem(dish)}
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="rounded-md w-full h-32 object-cover"
            />
             <div className="flex justify-between items-center mt-2">
              <p className="text-gray-500 font-medium">{dish.name}</p>
              <p className="text-gray-500 text-large">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Item Modal */}
      {selectedItem && (
        <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default MenuItemGrid;
