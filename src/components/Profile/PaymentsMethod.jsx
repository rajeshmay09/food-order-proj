import React from "react";

const paymentMethods = [
  {
    id: 1,
    cardType: "Visa",
    cardNumber: "**** **** **** 1234",
    expiryDate: "12/24",
  },
  {
    id: 2,
    cardType: "MasterCard",
    cardNumber: "**** **** **** 5678",
    expiryDate: "08/23",
  },
  // Add more payment methods as needed
];

const PaymentsMethod = () => {
  return (
    <div>
      <h2>Payment Methods</h2>
      {paymentMethods.map((method) => (
        <div key={method.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{method.cardType}</h5>
            <p className="card-text">Card Number: {method.cardNumber}</p>
            <p className="card-text">Expiry Date: {method.expiryDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentsMethod;
