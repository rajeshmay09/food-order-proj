import React from "react";

const OrderHistory = () => {
  const orders = [
    { id: "1", date: "2024-07-15", total: "$50.00", status: "Delivered" },
    { id: "2", date: "2024-07-20", total: "$75.00", status: "Shipped" },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Order History</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">Order ID</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Total</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2 px-4">{order.id}</td>
                <td className="py-2 px-4">{order.date}</td>
                <td className="py-2 px-4">{order.total}</td>
                <td className="py-2 px-4">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
