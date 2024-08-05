import React from "react";

const FeaturedProd = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg rounded-lg p-6 m-4">
      <div className="w-full md:w-1/2">
        <img
          src={product.image01}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg border-4 border-white shadow-md"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-6 mt-4 md:mt-0">
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <p className="text-lg mt-2">{product.description}</p>
        <p className="text-2xl font-semibold mt-2">
          ${product.price.toFixed(2)}
        </p>
        <button className="mt-4 px-6 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 transition duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default FeaturedProd;
