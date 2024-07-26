import React from "react";

const orders = [
  {
    id: 1,
    date: "2024-06-15",
    total: "$35.00",
    items: ["Pizza", "Burger", "Coke"],
  },
  {
    id: 2,
    date: "2024-06-18",
    total: "$25.00",
    items: ["Pasta", "Salad"],
  },
  // Add more orders as needed
];

const OrderHistory = () => {
  return (
    <div>
      <h2>Order History</h2>
      {orders.map((order) => (
        <div key={order.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Order #{order.id}</h5>
            <p className="card-text">Date: {order.date}</p>
            <p className="card-text">Total: {order.total}</p>
            <p className="card-text">Items: {order.items.join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
