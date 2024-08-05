import React from "react";
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import stores from '../../assets/fake-data/store'
//import { selectAllStores } from "../../store/slices/storeslice"; // Adjust the import path as necessary

const StoreList = () => {
  //const stores = useSelector(selectAllStores);
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Our Stores</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="p-4 border border-gray-300 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-2">{store.name}</h3>
            <p className="text-gray-600 mb-4">{store.description}</p>
            <Link to={`/stores/${store.id}`}>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
