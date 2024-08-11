import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { Container } from "reactstrap";
import { toggle } from "../../store/cart-actions/cartUiSlice";
import "../../styles/Header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
  {
    display: "Dashboard",
    path: "/dashboard",
  },
];

const Header1 = () => {
  const [navOpen, setNavOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(toggle());
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center md:flex-row flex-col">
        <div className="text-2xl font-bold mb-4 md:mb-0">
          <Link to="/" className="hover:text-yellow-500">
            MyStore
          </Link>
        </div>
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-200 hover:text-yellow-500"
          id="menu-btn"
          onClick={() => setNavOpen(!navOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0V15z" />
          </svg>
        </button>
        <nav
          className={`space-x-6 md:flex py-4 ${navOpen ? "flex" : "hidden"}`}
        >
          <Link
            to="/"
            className={(navClass) =>
              navClass.isActive ? "active__menu" : "hover:text-yellow-500"
            }
          >
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
        <div className={`space-x-4 md:flex ${navOpen ? "flex" : "hidden"}`}>
          <Link to="/cart" className="hover:text-yellow-500">
            <span className="cart__icon" onClick={toggleCart}>
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
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
