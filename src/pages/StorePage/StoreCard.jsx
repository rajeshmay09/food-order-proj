import React from "react";
import { Link } from "react-router-dom";

const StoreCard = ({ store, onClick }) => {
  return (
    <div
      class="flex flex-col justify-center border-8 border-cream transition-transform transform hover:scale-110 hover:shadow-xl"
      key={store.id}
    >
      <div
        class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 
      rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl"
      >
        <div class="w-full md:w-1/3 bg-white grid place-items-center">
          <img
            src="https://images.unsplash.com/photo-1508528075895-be7a6cabd37a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdW50YWluJTIwd2F0ZXJmYWxsfGVufDB8fDB8fHww"
            alt="tailwind logo"
            class="rounded-xl"
          />
        </div>
        <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div class="flex justify-between item-center">
            <div class="flex flex-row justify-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p class="text-gray-600 font-bold text-sm ml-1">
                4.96
                <span class="text-gray-500 font-normal">(76 reviews)</span>
              </p>
            </div>
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-pink-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <h3 class="font-black text-gray-800 md:text-3xl text-xl truncate">
            {store.name}
          </h3>
          <p class="md:text-lg text-gray-500 text-base truncate">
            {store.description}
          </p>
          <div
            class="flex pt-2 pr-2 justify-center gap-6 relative"
            onClick={() => onClick(store.id)}
          >
            <Link to={`/stores/${store.id}`} class="relative">
              <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
              <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">
                View Details
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
