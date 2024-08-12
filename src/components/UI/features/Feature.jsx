import React from "react";
import featureImg01 from "../../../assets/images/Storeai.png";
import featureImg02 from "../../../assets/images/Checklist.png";
import featureImg03 from "../../../assets/images/Colcheck.png";
import featureImg04 from "../../../assets/images/Delivery.png";
import LocalstoreBg from "../../../assets/images/LocalstoreBg.jpg";
import banstore1 from "../../../assets/images/banStore-1.jpg";
import banstore2 from "../../../assets/images/banStore-2.jpg";
import banstore3 from "../../../assets/images/banStore-3.jpg";
import { Link } from "react-router-dom";

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
      <div class="text-gray-700 body-font mt-4">
        <div class="flex justify-center text-3xl font-bold text-lime-800 text-center">
          Your Community, Our Focus
        </div>
        <div class="max-w-screen-lg mx-auto p-2 sm:p-10 md:p-16">
          <div class="rounded overflow-hidden flex flex-col mx-auto">
            <a class="text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"></a>

            <div class="relative">
              <Link to="#">
                <img
                  class="w-full rounded-3xl"
                  src={LocalstoreBg}
                  alt="Sunset in the mountains"
                />
              </Link>
              <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 rounded-3xl opacity-75"></div>
              <Link
                to="#"
                class="hidden fixed z-10 text-md absolute right-2/3 bottom-1/4  px-1 m-2 py-1 text-lime-950 
                 sm:flex items-center no-underline border-cream border-2"
              >
                <img
                  class="w-48"
                  src={banstore1}
                  alt="Sunset in the mountains"
                />
              </Link>

              <Link
                to="#!"
                class="hidden absolute z-10 text-md absolute bottom-1/4 left-96 px-1 m-2 py-1 
                text-lime-950  sm:flex items-center no-underline border-cream border-2"
              >
                <img
                  class="w-48"
                  src={banstore3}
                  alt="Sunset in the mountains"
                />
              </Link>
              <Link
                to="#!"
                class="hidden absolute z-10 text-md absolute left-2/3 bottom-1/4  px-1 m-2 py-1 
                text-lime-950  sm:flex items-center no-underline border-cream border-2"
              >
                <img
                  class="w-48"
                  src={banstore2}
                  alt="Sunset in the mountains"
                />
              </Link>
            </div>
            <div class="flex flex-wrap my-12">
              <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                <div class="flex items-center mb-6 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="h-6 w-6 text-lime-950"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div class="ml-4 text-xl text-lime-800">
                    Curated Local Selection
                  </div>
                </div>
                <p class="leading-loose text-lime-800">
                  Every purchase you make directly benefits the stores and
                  artisans in your neighborhood, helping to build a stronger,
                  more vibrant community.
                </p>
              </div>

              <div class="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                <div class="flex items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="h-6 w-6 text-lime-950"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div class="ml-4 text-xl text-lime-800">
                    Support Local Businesses
                  </div>
                </div>
                <p class="leading-loose text-lime-800">
                  Discover a handpicked collection of the best products your
                  area has to offer. From fresh produce to unique crafts.
                </p>
              </div>

              <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                <div class="flex items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="h-6 w-6 text-lime-950"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl text-lime-800">
                    Fast & Convenient
                  </div>
                </div>
                <p className="leading-loose text-lime-800">
                  Enjoy the convenience of online shopping with the speed of
                  local delivery.
                </p>
              </div>

              <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                <div className="flex items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    classname="h-6 w-6 text-lime-950"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl text-lime-800">
                    Personalized Service
                  </div>
                </div>
                <p className="leading-loose text-lime-800">
                  We’re committed to making your shopping experience smooth and
                  enjoyable.
                </p>
              </div>

              <div class="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                <div class="flex items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-lime-950"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl text-lime-800">
                    Exclusive Deals
                  </div>
                </div>
                <p className="leading-loose text-lime-800">
                  Access special offers and discounts from your favorite local
                  stores, available only on our platform.
                </p>
              </div>

              <div class="w-full md:w-1/2 lg:w-1/3 p-8">
                <div class="flex items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-lime-950"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl text-lime-800">
                    Unique Local Experiences
                  </div>
                </div>
                <p className="leading-loose text-lime-800">
                  Discover products and services that reflect the unique culture
                  and creativity of your community.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container px-5 py-6 mx-auto hover:translate-y-6">
          <div class="flex flex-wrap text-center justify-center space-x-10">
            {featureData.map((item, index) => (
              <div
                class="p-4 md:w-1/5 sm:w-1/2 rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-125 border-8 border-cream"
                key={index}
              >
                <div class="px-4 py-6">
                  <div class="flex justify-center">
                    <img src={item.imgUrl} class="w-32 mb-3" />
                  </div>
                  <h2 class="title-font font-regular text-2xl text-lime-800">
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
