import React from "react";
import Header from "../Header/Header";
import Routers from "../../routes/Routers";

import { useSelector } from "react-redux";
import Cart from "../UI/cart/Cart";
import Footer1 from "../Footer/Footer1";

const Layouts = () => {
  const showCart = useSelector((state) => state.cartui.cartvisible);
  return (
    <div>
      <Header />
      {showCart && <Cart />}
      <div style={{ backgroundColor: "#FBFFF4" }}>
        <Routers />
      </div>
      <Footer1 />
    </div>
  );
};

export default Layouts;
//<Footer1 />
