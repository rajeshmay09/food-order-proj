import React from "react";

const FeatureAbout = ({ feature }) => {
  return (
    <div class="flex flex-col justify-center" key={feature.id}>
      <div
        class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 
      rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white"
      >
        <div class="w-full md:w-1/3 bg-white grid place-items-center">
          <img
            src={feature.image}
            alt={feature.title}
            class="rounded-xl"
          />
        </div>
        <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <h3 class="font-black text-gray-800 md:text-3xl text-xl">
            {feature.title}
          </h3>
          <p class="md:text-lg text-gray-500 text-base">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureAbout;
