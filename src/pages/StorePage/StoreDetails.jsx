import React from "react";
import { useParams } from "react-router-dom";
//import { useSelector } from "react-redux";
//import { selectSelectedStore } from "../../store/slices/storeslice"; // Adjust the import path as necessary
//import { selectProductsByStore } from "../../store/slices/productslice"; // Adjust the import path as necessary

import stores from "../../assets/fake-data/store";

import products from "../../assets/fake-data/products";
import ProductList from "../productList/ProductList";

const StoreDetails = () => {
  const { storeId } = useParams();
  const store1 = stores[1];
  const products1 = products[1];
  //const store = useSelector((state) => selectSelectedStore(state, storeId));
  //const products = useSelector((state) => selectProductsByStore(state));

  //if (!store) {
  //  return <div>Store not found</div>;
  //}

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">{store1.name}</h2>
      <p className="text-gray-600 mb-4">{store1.description}</p>

      <h3 className="text-xl font-semibold mb-4">Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          key={products1.id}
          className="p-4 border border-gray-300 rounded-lg shadow-sm"
        >
          <img
            src={products1.image01}
            alt={products1.title}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h4 className="text-lg font-semibold mb-2">{products1.title}</h4>
          <p className="text-gray-600 mb-4">{products1.desc}</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default StoreDetails;

{
  /**
    {stores
        .filter((store) => store.id === storeId)
        .map((store) => (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{store.name}</h2>
            <p className="text-gray-600 mb-4">{store.description}</p>
          </div>
        ))} 
          
        
        
        {products1
          .filter((product) => product.storeId === storeId)
          .map((product) => (
            <div
              key={product.id}
              className="p-4 border border-gray-300 rounded-lg shadow-sm"
            >
              <img
                src={product.image01}
                alt={product.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">{product.title}</h4>
              <p className="text-gray-600 mb-4">{product.desc}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                View Details
              </button>
            </div>
          ))}*/
}
