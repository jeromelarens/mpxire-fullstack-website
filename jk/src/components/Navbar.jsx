import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/mpxire.png"; // ✅ make sure this path is correct

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-black text-white shadow-md fixed z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="MPXIRE Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-orange-500">MPXIRE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-full font-semibold"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <div className="space-y-1">
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black text-white w-full px-6 py-4 transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        {menuLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className="block py-2 hover:text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
        <Link
          to="/login"
          className="block mt-2 bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-full font-semibold"
          onClick={() => setIsOpen(false)}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}