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
        <h2 className="text-3xl font-bold text-lime-950">
          Your Neighborhood,
          <p className="text-5xl pt-12 animate-bounce text-lime-950">
            Your Marketplace- Shop Local,{" "}
          </p>
          <span className="text-3xl text-lime-950">Thrive Together! </span>
        </h2>
        <p className="text-xl pt-4 text-lime-950">
          Discover the power of shopping local. Support your community and enjoy
          unique finds right at your doorstep.
        </p>
        <div class="flex mt-8">
          <Link
            href="#"
            className="uppercase py-2 px-4 rounded-lg border-lime-950 border-2 border-solid font-medium hover:bg-lime-950 hover:text-white text-lime-950 text-md mr-4 no-underline animate-bounce hover:animate-none"
          >
            Products
          </Link>
          <Link
            href="#"
            className="uppercase py-2 px-4 rounded-lg border-2 border-lime-950 text-lime-950 text-10 font-medium no-underline hover:bg-lime-950 hover:text-white"
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
      </div>
    </div>
  );
};

export default HeroSection;

//        <div className="absolute top-1/2 left-1/3 ">
//<h1 className="text-white brightness-200"></h1>
//</div>
