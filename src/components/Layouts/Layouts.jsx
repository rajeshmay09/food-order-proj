import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers";


import { useSelector } from "react-redux";
import Cart from "../UI/cart/Cart";
import Header1 from "../Header/Header1";
import Footer1 from "../Footer/Footer1";

const Layouts = () => {
  const showCart = useSelector((state) => state.cartui.cartvisible);
  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      <Header1 />
      <Header />
      {showCart && <Cart />}
      <div>
        <Routers />
      </div>
      <Footer1 />
      <Footer />
    </div>
  );
};

export default Layouts;
