import React from "react";
import image01 from '../../assets/images/product_4.3.png'


const PromotionalOffer = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white overflow-hidden py-16">
      <div className="absolute inset-0 opacity-50">
        <img
          src= {image01} // Use a background image for effect
          alt="Promotional Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-white text-gray-900 rounded-lg shadow-xl p-8 md:p-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Exclusive Offer: 50% Off!
            </h2>
            <p className="text-lg mb-6">
              Don't miss out on our limited-time offer. Save 50% on selected
              items across our store. Shop now and enjoy the best deals of the
              season!
            </p>
            <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
              Shop Now
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={image01} // Main promotional image
              alt="Promotional Product"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalOffer;
