import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-500 text-white p-4 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">E-Commerce</Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <FiX className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <FiMenu className="text-2xl cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">Products</Link>
          <Link to="/cart" className="hover:underline">Cart</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2">
          <Link to="/" className="block p-2 bg-blue-600" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/cart" className="block p-2 bg-blue-600" onClick={() => setMenuOpen(false)}>Cart</Link>
        </div>
      )}
    </nav>
  );
}
