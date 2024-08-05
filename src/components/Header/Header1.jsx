import React from "react";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-yellow-500">
            MyStore
          </Link>
        </div>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>
          <Link to="/products" className="hover:text-yellow-500">
            Products
          </Link>
          <Link to="/stores" className="hover:text-yellow-500">
            Stores
          </Link>
          <Link to="/about" className="hover:text-yellow-500">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-500">
            Contact
          </Link>
        </nav>
        <div className="space-x-4">
          <Link to="/cart" className="hover:text-yellow-500">
            Cart
          </Link>
          <Link to="/login" className="hover:text-yellow-500">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header1;
