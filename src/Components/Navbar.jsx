import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Furniflex Logo"
            className="h-10 w-10 mr-2"
          />
          <span className="text-xl font-bold text-gray-800">Furniflex</span>
        </div>
        <ul className="flex space-x-6 text-gray-600 font-medium">
          <li>
            <Link to="/home" className="hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link to="/rocking-chair" className="hover:text-gray-900">
              Products
            </Link>
          </li>
          <li>
            <Link to="/categories" className="hover:text-gray-900">
              Categories
            </Link>
          </li>
          <li>
            <Link to="/customs" className="hover:text-gray-900">
              Customs
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-gray-900">
              Blogs
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <FaShoppingCart className="text-gray-600 hover:text-gray-900 text-2xl cursor-pointer" />
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="h-10 w-10 rounded-full border-2 border-gray-300 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
