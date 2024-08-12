import React from "react";
import HeroAbout from "./HeroAbout";
import FeatureAbout from "./FeatureAbout";
import image1 from "../../assets/images/aboutfeat-1.jpg";
import image2 from "../../assets/images/aboutfeat-2.jpg";
import image3 from "../../assets/images/aboutfeat-3.jpg";
import ActionsAbout from "./ActionsAbout";

const aboutFeatures = [
  {
    id: 1,
    title: "Excellence in Every Detail",
    image: image1,
    description:
      "We are dedicated to providing only the finest products, ensuring that each item we offer reflects superior craftsmanship and attention to detail",
  },
  {
    id: 2,
    title: "Authenticity Guaranteed",
    image: image2,
    description:
      "We work closely with local artisans and vendors to bring you genuine, one-of-a-kind items that embody the true spirit and culture of our community.",
  },
  {
    id: 3,
    title: "Consistent Reliability",
    image: image3,
    description:
      "Quality you can trust—every time. We rigorously vet our partners to ensure that you receive products that meet our uncompromising standards.",
  },
];
const AboutUs = () => {
  return (
    <div>
      <div>
        <HeroAbout />
      </div>
      <div className="text-center pt-12 md:pt-24">
        <h1 className="font-bold break-normal text-3xl md:text-5xl text-lime-950">
          Our Commitment to Quality
        </h1>
        <h1 className=" font-bold break-normal text-xl md:text-2xl pt-4 text-lime-950">
          "Our mission is to revolutionize local shopping by connecting you with
          the best of your community—bringing convenience, quality, and
          connection right to your doorstep"
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-8 sm:gap-8 mb-6 sm:mb-6 mt-6">
        {aboutFeatures.map((aboutfeature) => (
          <div key={aboutfeature.id}>
            <FeatureAbout feature={aboutfeature} />
          </div>
        ))}
      </div>
      <div>
        <ActionsAbout />
      </div>
      <div className="text-center pt-8 md:pt-12">
        <h1 className="font-bold break-normal text-3xl md:text-5xl text-lime-950">
          DISCLAIMER
        </h1>
        <h1 className=" font-bold break-normal text-xl md:text-2xl pt-4 text-lime-950">
          "Please note that our website is continually evolving to enhance your
          experience. Updates and changes may occur at any time without prior
          notice. We strive to keep our content accurate and up-to-date. We
          appreciate your understanding and encourage you to check back
          regularly for the latest information and improvements."
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;
