import React from "react";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";

import { addItem } from "../../../store/cart-actions/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price px-2">{price}</span>
          <button
            className="addTOCart__btn px-2"
            onClick={() => dispatch(addItem({ id, title, image01, price }))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
