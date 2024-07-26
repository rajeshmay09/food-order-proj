import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AllFood from "../pages/Allfood";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import FoodDetails from "../pages/FoodDetails";
import Contact from "../pages/Contact";

import Register from "../pages/Register";
import Logins from "../pages/Logins";
import Dashboard from "../pages/Dashboard";
import Profile from "../components/Profile/Profile";
import OrderHistory from "../components/Profile/OrderHistory";
import PaymentsMethods from "../components/Profile/PaymentsMethod";
import SavedAddress from "../components/Profile/SavedAddress";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFood />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/foods/:id" element={<FoodDetails />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Logins />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/dashboard/profile" element={<Profile />}></Route>
      <Route path="/dashboard/orderhistory" element={<OrderHistory />}></Route>
      <Route
        path="/dashboard/paymentMethods"
        element={<PaymentsMethods />}
      ></Route>
      <Route path="/dashboard/savedAddress" element={<SavedAddress />}></Route>
    </Routes>
  );
};

export default Routers;
