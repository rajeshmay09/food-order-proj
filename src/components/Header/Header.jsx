import { NavLink, Link } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
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

const Header = () => {
    const menuRef = useRef(null);
    const headerRef = useRef(null);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();
  
    const toggleCart = () => {
      dispatch(toggle());
    };
  
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
      <header className="header" ref={headerRef}>
        <Container>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
            </div>
            <div className="navigation">
              <div
                className="menu d-flex align-items-center gap-5"
                onClick={(event) => event.stopPropagation()}
              >
                {nav__links.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav__right d-flex align-items-center gap-4">
              <span className="cart__icon" onClick={toggleCart}>
                <i class="ri-shopping-basket-line"></i>
                <span className="cart__badge">{totalQuantity}</span>
              </span>
  
              <span className="user">
                <Link to="/login">
                  <i class="ri-user-line"></i>
                </Link>
              </span>
  
              <span className="mobile__menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Container>
      </header>
    );
}

export default Header