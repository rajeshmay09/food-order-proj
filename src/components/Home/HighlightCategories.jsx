import React from "react";

const HighlightCategories = ({ category }) => {
  return (
    <div className="py-8 bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {category.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent text-white">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-sm mt-2">{category.description}</p>
                <button className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightCategories;
