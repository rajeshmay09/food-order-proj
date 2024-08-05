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
import AccountOverview from "../pages/Accounts/AccountOverview";
import ProfileManagement from "../pages/Accounts/ProfileManagement";
import AccountSettings from "../pages/Accounts/AccountSettings";
import StoreList from "../pages/StorePage/StoreList";
import StoreDetails from "../pages/StorePage/StoreDetails";
import ProductList from "../pages/productList/ProductList";
import Productpage from "../pages/productList/Productpage";
import AccountSec from "../pages/Accounts/AccountSec";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFood />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<AccountSec />} />
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/foods/:id" element={<FoodDetails />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Logins />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/dashboard/profile" element={<Profile />}></Route>
      <Route path="/dashboard/orderhistory" element={<OrderHistory />}></Route>
      
      <Route path="/stores" element={<StoreList />}></Route>
      <Route path="/stores/:id" element={<StoreDetails/>}></Route>
      <Route path="/products" element={<ProductList />}></Route>
      <Route path="/products/details" element={<Productpage />}></Route>

      <Route path="/account" element={<AccountOverview />}></Route>
      <Route path="/account/profile" element={<ProfileManagement />}></Route>
      <Route path="/account/orders" element={<OrderHistory />}></Route>
      <Route path="/account/settings" element={<AccountSettings />}></Route>
      <Route
        path="/dashboard/paymentMethods"
        element={<PaymentsMethods />}
      ></Route>
      <Route path="/dashboard/savedAddress" element={<SavedAddress />}></Route>
    </Routes>
  );
};

export default Routers;
