import React from "react";
import { Link } from 'react-router-dom';

const AccountOverview = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Account Overview</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Hello, [User's Name]</h2>
        <p className="text-lg mb-4">
          Welcome back to MyStore! Here you can manage your account details and
          view your order history.
        </p>
        <div className="space-y-4">
          <Link
            to="/account/profile"
            className="block bg-blue-500 text-white text-center py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Manage Profile
          </Link>
          <Link
            to="/account/orders"
            className="block bg-blue-500 text-white text-center py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Order History
          </Link>
          <Link
            to="/account/settings"
            className="block bg-blue-500 text-white text-center py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Account Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
