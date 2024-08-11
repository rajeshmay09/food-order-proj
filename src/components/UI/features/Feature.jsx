import React from "react";
import featureImg01 from "../../../assets/images/Storeai.png";
import featureImg02 from "../../../assets/images/Checklist.png";
import featureImg03 from "../../../assets/images/Colcheck.png";
import featureImg04 from "../../../assets/images/Delivery.png";
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg04,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const Feature = () => {
  return (
    <>
      <div class="text-gray-700 body-font mt-10">
        <div class="flex justify-center text-3xl font-bold text-gray-800 text-center">
          Why Us?
        </div>
        <div class="container px-5 py-12 mx-auto hover:translate-y-6">
          <div class="flex flex-wrap text-center justify-center space-x-10">
            {featureData.map((item, index) => (
              <div class="p-4 md:w-1/5 sm:w-1/2 rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-125 border-8 border-cream" key={index}>
                <div class="px-4 py-6">
                  <div class="flex justify-center">
                    <img src={item.imgUrl} class="w-32 mb-3" />
                  </div>
                  <h2 class="title-font font-regular text-2xl text-gray-900">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Feature;
