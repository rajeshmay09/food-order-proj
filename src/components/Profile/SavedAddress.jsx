import React from "react";

const addresses = [
  {
    id: 1,
    address: "123 Main St, Springfield, IL 62704",
  },
  {
    id: 2,
    address: "456 Elm St, Shelbyville, IL 62565",
  },
  // Add more addresses as needed
];

const SavedAddress = () => {
  return (
    <div>
      <h2>Saved Addresses</h2>
      {addresses.map((address) => (
        <div key={address.id} className="card mb-3">
          <div className="card-body">
            <p className="card-text">{address.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedAddress;
