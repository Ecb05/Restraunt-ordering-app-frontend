import { useNavigate } from "react-router-dom";

const CuisineNav = ({ active }: { active: string }) => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Favorites", icon: "❤️", path: "/menu/favorites" },
    { name: "Popular", icon: "👌", path: "/menu/popular" },
    { name: "Curry", icon: "🍚", path: "/menu/curry" },
    { name: "Ramen", icon: "🍜", path: "/menu/ramen" },
    { name: "Teppanyaki", icon: "🍲", path: "/menu/teppanyaki" },
  ];

  return (
    <div className="flex overflow-x-auto space-x-4 p-4 bg-black text-white">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={`flex flex-col items-center px-3 py-2 rounded-md transition-all ${
            item.name === active
              ? "bg-yellow-400  shadow-[0_4px_15px_rgba(255,223,88,0.8)]"
              : "bg-gray-800"
          }`}
          onClick={() => navigate(item.path)}
        >
          <span className="text-lg">{item.icon}</span>
          <span className="text-sm font-medium">{item.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CuisineNav;
