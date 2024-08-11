import React from "react";
import heroBanner from "../../assets/images/hero-banner.jpg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div
      className="md:container md:mx-auto flex flex-row  
    bg-gradient-to-t from-cream from-30% via-slate-100 via-40% to-cream to-70% rounded-3xl"
    >
      <div className="container content-center mx-auto p-4">
        <h2 className="text-3xl font-bold">
          Your Neighborhood,
          <p className="text-5xl pt-12 animate-bounce">
            Your Marketplace- Shop Local,{" "}
          </p>
          <span className="text-3xl">Thrive Together! </span>
        </h2>
        <p className="text-xl pt-4">
          Discover the power of shopping local. Support your community and enjoy
          unique finds right at your doorstep.
        </p>
        <div class="flex mt-8">
          <Link
            href="#"
            class="uppercase py-2 px-4 rounded-lg border-black border-2 border-transparent text-black text-md mr-4 no-underline animate-bounce hover:animate-none"
          >
            Products
          </Link>
          <Link
            href="#"
            class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-black text-black dark:text-white hover:bg-pink-500 hover:text-white text-md no-underline"
          >
            Stores
          </Link>
        </div>
      </div>
      <div className="container relative mx-auto p-4">
        <img
          src={heroBanner}
          alt="hero-img"
          className="rounded-3xl brightness-50 "
        />
        <div className="absolute top-1/2 left-1/3 ">
          <h1 className="text-white brightness-200">SHOP NOW</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
