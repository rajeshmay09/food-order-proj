import { toggle } from "../../../store/cart-actions/cartUiSlice";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import "../../../styles/shopping-cart.css";
import CartItems from "./CartItems";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(toggle());
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5 text-lime-950">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItems item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>
          <button>
            <Link to="/checkout" className="no-underline" onClick={toggleCart}>
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Cart;
