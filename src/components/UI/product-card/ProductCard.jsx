import React from "react";
//import "../../../styles/product-card.css";
import { Link } from "react-router-dom";
import { addItem } from "../../../store/cart-actions/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();
  return (
    <div
      key={id}
      className="mx-auto w-60 bg-white shadow-md rounded-xl duration-500 border-8 border-cream shadow-xl transition-transform transform hover:scale-110 hover:shadow-xl"
    >
      <div className="absolute ml-44 mt-3 max-w rounded-full bg-cream p-2 text-[#E74040]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
      <img
        src={image01}
        alt="Product"
        className="w-full object-cover rounded-b-xl"
      />
      <div className="px-4 py-3 w-60">
        <p className="text-lg font-bold text-lime-800 truncate block capitalize">
          <Link to={`/product/${id}`} className="no-underline text-lime-950">
            {title}
          </Link>
        </p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-lime-800 cursor-auto my-3 no-underline">
            ${price}
          </p>

          <p class="text-sm text-lime-800 cursor-auto ml-2 line-through mb-0">
            $199
          </p>

          <div
            className="ml-20 text-lime-800 cursor-pointer"
            onClick={() => dispatch(addItem({ id, title, image01, price }))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-bag-plus"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
              />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;

{
  /**
  return (
    <div className="product-card">
      <img src={image01} alt={title} />
        <h2>{title}</h2>
        <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};
export default ProductCard;
{
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className=" flex items-center justify-between ">
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



<div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-100" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className=" flex items-center justify-between ">
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



    Final here.......................

    <div class="max-w-xs bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 hover:scale-110 flex flex-col items-center justify-center">
      <img
        src={image01}
        alt={title}
        class="w-48 h-48 object-cover rounded-t-3xl"
      />
      <div class="p-4 w-full truncate flex flex-col items-center justify-center">
        <Link to={`/foods/${id}`} className="no-underline">
          <h2 class="text-lg font-bold text-gray-900">{title}</h2>
        </Link>
        <p class="text-gray-600 font-bold">${price}</p>
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          onClick={() => dispatch(addItem({ id, title, image01, price }))}
        >
          Add to Cart
        </button>
      </div>
    </div>
 */
}
