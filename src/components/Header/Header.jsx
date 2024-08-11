import { NavLink, Link } from "react-router-dom";
import { Container } from "reactstrap";
import featureImg01 from "../../assets/images/Delivery.png";

import "../../styles/Header.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useRef, useEffect } from "react";
import { toggle } from "../../store/cart-actions/cartUiSlice";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Products",
    path: "/products",
  },
  {
    display: "Stores",
    path: "/stores",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "About Us",
    path: "/about",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(toggle());
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } //else {
      // headerRef.current.classList.remove("header__shrink");
      // }
    });
  }, []);

  return (
    <header
      className="header bg-gradient-to-r from-cream from-30% via-slate-100 via-40% to-cream to-70%"
      ref={headerRef}
    >
      <Container>
        <div className="nav__wrapper flex justify-between items-center ">
          <div className="logo relative">
            <div className="animated-text absolute bottom-9 end-1 max-w-10 max-h-10">
              <img src={featureImg01} />
            </div>
            <h5 className="animated-text bg-gradient-to-r from-cream from-30% via-gray-50 via-40% to-cream to-70% shadow-xl">CLICS LOCAL</h5>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div
              className="menu flex items-center gap-5"
              onClick={(event) => event.stopPropagation()}
            >
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                  onClick={toggleMenu}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="nav__right flex items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge animated-text ">{totalQuantity}</span>
            </span>

            <div class="dropdown">
              <button class="dropbtn">
                <span className="user">
                  <Link to="/login" className="user-li">
                    Login
                  </Link>
                </span>
              </button>
              <div class="dropdown-content">
                <span className="user">
                  <Link to="/register" className="user-li">
                    Sign Up
                  </Link>
                </span>
              </div>
            </div>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
