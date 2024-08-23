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
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div class="container mx-auto mt-10">
      <div class="sm:flex shadow-md my-10">
        <div class="  w-full  sm:w-3/4 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
            <h2 class="font-semibold text-2xl">
              Quantity : {cartItems.length}
            </h2>
          </div>

          {cartItems.length === 0 ? (
            <h5 className="text-center">Your cart is empty</h5>
          ) : (
            <div class="flex-col md:flex-col justify-between flex gap-4 items-start mx-4 py-12">
              {cartItems.map((item) => (
                <div class="flex bg-white rounded-xl border-8 border-cream shadow-xl  flex-col md:flex-row" key={item.id}>
                  <div class="relative w-full md:w-48 flex justify-center items-center">
                    <img
                      src={item.image01}
                      alt="shopping image"
                      class="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                  </div>
                  <div class="flex-auto p-6">
                    <div class="flex flex-wrap">
                      <h1 class="flex-auto text-xl font-semibold text-lime-950">
                        {item.title}
                      </h1>
                      <div class="text-xl font-semibold text-lime-950 ">
                      {item.price}
                      </div>

                      <div class="flex justify-between w-full mt-2 text-sm font-medium text-lime-950">
                        <p>In stock</p>
                        <div className="space-x-2">
                          <button
                            class="w-5 h-5 self-center rounded-full border border-gray-300"
                            onClick={() => dispatch(removeItem(item.id))}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#d1d5db"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14" />
                            </svg>
                          </button>
                          <input
                            type="text"
                            readonly="readonly"
                            value={item.quantity}
                            class="w-8 h-8 text-center text-gray-900 text-sm outline-none border border-gray-300 rounded-sm"
                          />
                          <button
                            class="w-5 h-5 self-center rounded-full border border-gray-300"
                            onClick={() => dispatch(increment(item.id))}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill=""
                              stroke="#9ca3af"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M12 5v14M5 12h14" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="flex mt-4 mb-4 text-sm font-medium">
                      <button
                        type="button"
                        class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                      >
                        Similar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <Link to='/products' class="flex font-semibold text-lime-950 text-xl mt-10 no-underline">
            <svg
              class="fill-current mr-2 text-lime-800 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        <div id="summary" class=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10">
          <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">Items {cartItems.length}</span>
            <span class="font-semibold text-sm">{totalAmount}</span>
          </div>
          <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select class="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div class="py-10">
            <label
              for="promo"
              class="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              class="p-2 text-sm w-full"
            />
          </div>
          <button class="bg-cream hover:bg-lime-950 hover:text-white px-5 py-3 text-sm text-lime-950 font-bold rounded-3xl uppercase">
            Apply
          </button>
          <div class="border-t mt-8">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>{totalAmount}</span>
            </div>
            <button class="bg-lime-950 inline-flex justify-center text-white gap-2 font-semibold hover:bg-lime-800 hover:text-white py-3 text-sm uppercase w-full rounded-full">
            <Link to="/checkout" className="no-underline text-white">Proceed to checkout</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 rtl:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
{
  /** 
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

<select
                  aria-label="Select quantity"
                  class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                >
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>



<div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
  <div>
    <div class="md:w-60 2xl:w-1/4 w-full">
      <img
        src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Black Leather Purse"
        class="h-full object-center object-cover md:block hidden"
      />
      <img
        src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Black Leather Purse"
        class="md:hidden w-full h-full object-center object-cover"
      />
    </div>
    <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
      <div class="flex justify-between w-full">
        <p class="text-base font-black leading-none text-gray-800">
          Luxe card holder
        </p>
        <div class="flex flex-row self-center gap-1">
          <button class="w-5 h-5 self-center rounded-full border border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d1d5db"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
          <input
            type="text"
            readonly="readonly"
            value="1"
            class="w-8 h-8 text-center text-gray-900 text-sm outline-none border border-gray-300 rounded-sm"
          />
          <button class="w-5 h-5 self-center rounded-full border border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill=""
              stroke="#9ca3af"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
      </div>

      <p class="text-xs leading-3 text-gray-600 py-4">Color: Black</p>

      <div class="flex items-center justify-between pt-5">
        <div class="flex itemms-center">
          <p class="text-xs leading-3 underline text-gray-800 cursor-pointer">
            Add to favorites
          </p>
          <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
            Remove
          </p>
        </div>
        <p class="text-base font-black leading-none text-gray-800">,000</p>
      </div>
    </div>
  </div>
</div>;
*/
}
