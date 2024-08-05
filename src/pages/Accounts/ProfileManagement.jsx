import React, { useState } from "react";

const ProfileManagement = () => {
  const [profilePic, setProfilePic] = useState("path_to_profile_picture");
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [address, setAddress] = useState("");
  const [orderHistory, setOrderHistory] = useState([
    { id: 1, details: "Order #1234 - $50.00" },
    { id: 2, details: "Order #5678 - $30.00" },
  ]);
  const [paymentMethods, setPaymentMethods] = useState([
    "Visa ending in 1234",
    "MasterCard ending in 5678",
  ]);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* Profile Overview */}
      <div className="mb-6 flex items-center">
        <img
          src={profilePic}
          alt="Profile Picture"
          className="w-24 h-24 rounded-full border-2 border-gray-300 mr-4"
        />
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>

      {/* Edit Profile */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="profile-pic"
            >
              Profile Picture
            </label>
            <input
              type="file"
              id="profile-pic"
              className="w-full p-2 border border-gray-300 rounded-lg"
              onChange={(e) =>
                setProfilePic(URL.createObjectURL(e.target.files[0]))
              }
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>

      {/* Address Book */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Address Book</h2>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          placeholder="Add a new address"
        />
        <div>
          {/* Display existing addresses */}
          <p className="text-gray-600 mb-2">Addresses:</p>
          {/* You would dynamically render existing addresses here */}
          <p className="text-gray-600">123 Main St, Anytown</p>
        </div>
      </div>

      {/* Order History */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Order History</h2>
        <ul>
          {orderHistory.map((order) => (
            <li key={order.id} className="mb-2">
              {order.details}
            </li>
          ))}
        </ul>
      </div>

      {/* Payment Methods */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
        <ul>
          {paymentMethods.map((method) => (
            <li key={method} className="mb-2">
              {method}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileManagement;
