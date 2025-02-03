import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-lg font-bold">Admin Dashboard</h1>
      <div>
        <Link to="/" className="px-4">Home</Link>
        <Link to="/wishlist" className="px-4">Wishlist</Link>
        <Link to="/admin" className="px-4">Admin</Link>
      </div>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
