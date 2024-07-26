import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers";


import { useSelector } from "react-redux";
import Cart from "../UI/cart/Cart";

const Layouts = () => {
  const showCart = useSelector((state) => state.cartui.cartvisible);
  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      <Header />
      {showCart && <Cart />}
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layouts;
