import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import {
  increment,
  removeItem,
  deleteItem,
} from "../store/cart-actions/cartSlice";

import "../styles/cart-page.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <section className="pt-4">
      <Container>
        <Row>
          <Col lg="12">
            {cartItems.length === 0 ? (
              <h5 className="text-center">Your cart is empty</h5>
            ) : (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <Tr item={item} key={item.id} />
                  ))}
                </tbody>
              </table>
            )}

            <div className="mt-4">
              <h6>
                Subtotal: $<span className="cart__subtotal">{totalAmount}</span>
              </h6>
              <p>Taxes and shipping will calculate at checkout</p>
              <div className="cart__page-btn">
                <button className="addTOCart__btn me-4">
                  <Link to="/foods">Continue Shopping</Link>
                </button>
                <button className="addTOCart__btn">
                  <Link to="/checkout">Proceed to checkout</Link>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">
        <button onClick={() => dispatch(increment(id))}>+</button>
        {quantity}px<button onClick={() => dispatch(removeItem(id))}>-</button>
      </td>
      <td className="text-center cart__item-del">
        <button
          onClick={() => dispatch(deleteItem(id))}
          className="outline-none"
        >
          <i class="ri-delete-bin-line"></i>
        </button>
      </td>
    </tr>
  );
};

export default Cart;
