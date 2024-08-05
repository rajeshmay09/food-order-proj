import React from "react";
import image01 from "../../assets/images/product_4.3.png";

const featuredStores = [
  {
    id: 1,
    name: "Tech Haven",
    description: "The ultimate destination for the latest electronics.",
    image: image01,
  },
  {
    id: 2,
    name: "Fashion Fusion",
    description: "Trendy and stylish clothing for all occasions.",
    image: image01,
  },
  {
    id: 3,
    name: "Home Essentials",
    description: "Everything you need to make your home comfortable.",
    image: image01,
  },
  {
    id: 4,
    name: "Book Barn",
    description: "A wide range of books for avid readers.",
    image: image01,
  },
];

const FeaturedStores = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Featured Stores
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredStores.map((store) => (
            <div
              key={store.id}
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {store.name}
                </h3>
                <p className="text-gray-600 mt-2">{store.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedStores;
