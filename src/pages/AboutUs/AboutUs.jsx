import React from "react";
import HeroAbout from "./HeroAbout";
import FeatureAbout from "./FeatureAbout";

const AboutUs = () => {
  return (
    <div>
      <HeroAbout />
      <div class="text-center pt-16 md:pt-32">
        <p class="text-sm md:text-base text-green-500 font-bold">
          04 AUGUST 2023 <span class="text-gray-900">/</span> GETTING STARTED
        </p>
        <h1 class="font-bold break-normal text-3xl md:text-5xl">
          Welcome to Ghostwind CSS
        </h1>
      </div>
      <FeatureAbout />
    </div>
  );
};

export default AboutUs;
