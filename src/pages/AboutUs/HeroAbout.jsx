import React from "react";
import LocalBg from "../../assets/images/LocalstoreBg.jpg";

const HeroAbout = () => {
  return (
    <div
      class="relative z-1 w-full flex items-center justify-center bg-cover bg-center text-center px-5"
      style={{ backgroundImage: `url(${LocalBg})` }}
    >
      <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

      <div class="z-10 flex flex-col justify-center text-white w-2/3 ">
        <span class="text-bold">LOGO</span>
        <h1 className="text-5xl">
          Bridging Communities Through Local Shopping.
        </h1>
        <p className="mt-4">
          Welcome to Clics Local Store, where shopping local isn't just a
          choice—it's a way of life. We’re on a mission to bring the heart of
          your community right to your doorstep, connecting you with the best
          local products and the passionate people behind them. Whether you're
          looking for unique crafts, fresh produce, or the latest trends from
          neighborhood boutiques, we’re here to make local shopping simple,
          enjoyable, and impactful.
        </p>

        <div class="sm:mt-12 p-6">
          <form class="w-full max-w-2xl mx-auto ">
            <div class="flex flex-row gap-4 items-center border border-white p-4 mb-8">
              <label
                for="message"
                class="max-w-5/12 block mb-2 text-xl font-medium text-white"
              >
                Connect :
              </label>
              <input
                class="appearance-none bg-transparent border-white  border rounded w-1/2 text-white mr-1 py-2 px-2 
                    leading-tight focus:outline-solid"
                type="text"
                placeholder="username@email.ext"
                aria-label="Full name"
              />
              <button
                class="flex-shrink-0 bg-indigo-500 hover:bg-teal-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
{
  /**
    <div>
    <section class="px-2 py-16 bg-white md:px-0">
        <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div class="flex flex-wrap items-center sm:-mx-3">
            <div class="w-full md:w-1/2 md:px-3">
              <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span class="block xl:inline">Useful Tools to</span>
                  <span class="block text-indigo-600 xl:inline">
                    Help You Build Faster.
                  </span>
                </h1>
                <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  It's never been easier to build beautiful websites that convey
                  your message and tell your story.
                </p>
                <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="#_"
                    class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                  >
                    Try It Free
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  <a
                    href="#_"
                    class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              </div>
            <div class="w-full md:w-1/2">
              <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
              </div>
              </div>
              </div>
        </div>
        </section>
    </div>
  );
};
*/
}

export default HeroAbout;
