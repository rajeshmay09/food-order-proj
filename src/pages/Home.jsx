import React, { useState, useEffect } from "react";
import { Container, Row, Col} from "reactstrap";

import featureImg01 from "../assets/images/Storeai.png";
import featureImg02 from "../assets/images/Checklist.png";
import featureImg03 from "../assets/images/Colcheck.png";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";


import "../styles/hero-section.css";
import "../styles/home.css";

import products from "../assets/fake-data/products.js";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
import Category from "../components/UI/category/Category.jsx";
import HeroSection from "../components/Home/HeroSection.jsx";
import Feature from "../components/UI/features/Feature.jsx";

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
];
const featuredProduct = products[0];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  const displayedProducts = allProducts.slice(0, 6);
  return (
    <>
      <section className="pt-4">
        <Container>
          <Row>
            <Col>
              <HeroSection />
            </Col>
          </Row>
        </Container>
      </section>

      <div class="mt-8 w-full h-1px md:max-w-6xl mx-auto py-0.5 bg-lime-950"></div>

      <section className="container pt-6">
        <Category />
      </section>

      <div class="mt-8 w-full h-1px md:max-w-6xl mx-auto py-0.5 bg-lime-950"></div>

      <section className="pt-8 pb-8">
        <Feature />
      </section>
      <div class="mt-8 w-full h-1px md:max-w-6xl mx-auto py-0.5 bg-lime-950"></div>
      <section className="pb-4 pt-4 mt-4">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div
                className="food__category d-flex align-items-center justify-content-center gap-4 
              bg-gradient-to-r from-cream from-30% via-slate-100 via-40% to-cream to-70%"
              >
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {displayedProducts.map((item) => (
              <Col lg="3" md="3" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <div class="mt-8 w-full h-0.5px md:max-w-6xl mx-auto py-0.5 bg-lime-950 mb-12"></div>
      <section>
        <Container>
          <Row>
            <TestimonialSlider />
          </Row>
        </Container>
      </section>
      <div className="text-center pb-4 pt-8 md:pt-12">
        <h1 className="font-bold break-normal text-3xl md:text-5xl text-lime-950">
          DISCLAIMER
        </h1>
        <h1 className=" font-bold break-normal text-xl md:text-2xl pt-4 text-lime-950">
          "Demo Website. Please note that our website is continually evolving to enhance your
          experience. Updates and changes may occur at any time without prior
          notice. We appreciate your understanding and encourage you to check
          back regularly for the latest information and improvements. **Website is
          not for the mobile screens, only few features have been modified for
          mobile Screens.**"
        </h1>
      </div>
    </>
  );
};

export default Home;

{
  /**
   Image conatiner with two containers in it.

   <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Text Section 
        <div className="w-full md:w-1/2 p-4 border-black border-2 border-solid">
          <h2 className="text-2xl font-bold mb-4">Your Text Here</h2>
          <p className="text-lg">
            This is a responsive container with two partitions. The text is on one side and the image is on the other. It adjusts automatically for mobile and desktop views.
          </p>
        </div>

        {/* Image Section 
        <div className="w-full md:w-1/2 p-4 border-black border-2 border-solid">
          <img src={heroImg} alt="Description" className="w-full h-auto object-cover rounded-md" />
        </div>
      </div>
    </div>
  

//featured store
    <section>
        <div className="container mx-auto">
          <FeaturedStores />
        </div>
      </section>

      
  */
}
