import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-900 text-white">
      <h1 className="text-lg font-bold">🍽️ My Restaurant</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/menu" className="hover:text-gray-400">Menu</Link>
        <Link to="/order" className="hover:text-gray-400">Order</Link>
        <Link to="/payment" className="hover:text-gray-400">Payment</Link>
      </div>
    </nav>
  );
}
