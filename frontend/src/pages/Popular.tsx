import { useState } from "react";


const menuItems = [
  { id: 1, name: "Teriyaki Sirloin Steak", price: "12.25£", image: "steak.jpg", cuisine: "Teppanyaki" },
  { id: 2, name: "Teriyaki Salmon Soba", price: "12.25£", image: "salmon.jpg", cuisine: "Teppanyaki" },
  { id: 3, name: "Ginger Chicken Udon", price: "9.50£", image: "udon.jpg", cuisine: "Ramen" },
  { id: 4, name: "Yaki Soba", price: "8.25£", image: "soba.jpg", cuisine: "Teppanyaki" }
];

export default function Home() {
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const filteredMenu = selectedCuisine === "All"
    ? menuItems
    : menuItems.filter(item => item.cuisine === selectedCuisine);

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
     

      {/* Menu Grid */}
      <div className="flex-1 overflow-y-auto p-4 grid grid-cols-2 gap-4">
        {filteredMenu.map(({ id, name, price, image }) => (
          <div key={id} className="bg-white p-2 rounded-lg shadow-md">
            <img src={image} alt={name} className="w-full rounded-md" />
            <div className="mt-2 text-center">
              <p className="font-semibold">{name}</p>
              <p className="text-gray-600">{price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Order Button */}
      <div className="fixed bottom-0 left-0 w-full bg-black text-white text-center p-4 text-lg cursor-pointer">
        Order
      </div>
    </div>
  );
}
