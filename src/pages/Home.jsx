import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import featureImg01 from "../assets/images/Storeai.png";
import featureImg02 from "../assets/images/Checklist.png";
import featureImg03 from "../assets/images/Colcheck.png";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";

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

      <section className="container pt-6">
        <Category />
      </section>

      <section className="pt-8 pb-8">
        <Feature />
      </section>

      <section className="pb-4 pt-4">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4 
              bg-gradient-to-r from-cream from-30% via-slate-100 via-40% to-cream to-70%">
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
              <Col lg="4" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>

                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
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
