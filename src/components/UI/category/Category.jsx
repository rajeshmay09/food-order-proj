import React from "react";
import { Container, Row,} from "reactstrap";
import { Link } from "react-router-dom";

import Grocery from "../../../assets/images/Grocery.jpg";
import PersonalCare from "../../../assets/images/Personal-care.jpg";
import BookEnt from "../../../assets/images/Book-ent.jpg";
import Electronics from "../../../assets/images/Electronics.jpg";
import Fashion from "../../../assets/images/Fashion.jpg";
import Localservice from "../../../assets/images/Localservice.jpg";
import Foodbev from "../../../assets/images/Food-bev.jpg";
import Gifts from "../../../assets/images/Giftys.jpg";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "Groceries",
    imgUrl: Grocery,
  },
  {
    display: "Personal Care",
    imgUrl: PersonalCare,
  },

  {
    display: "Books & Entertainment",
    imgUrl: BookEnt,
  },

  {
    display: "Electronics & Gadgets",
    imgUrl: Electronics,
  },
  {
    display: "Fashion & Accessories",
    imgUrl: Fashion,
  },
  {
    display: "Gifts & Special Occasions",
    imgUrl: Gifts,
  },
  {
    display: " Local Services",
    imgUrl: Localservice,
  },
  {
    display: "Food & Beverages",
    imgUrl: Foodbev,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        <h2 className="text-3xl font-bold text-center mb-6">
          "Your Neighborhood, Delivered: Everything You Need, Just Around the
          Corner."
        </h2>
        <p className="text-xl font-bold text-center pb-6">
          "Bringing the Best of Your Community Right to Your Doorstep."
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryData.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-125 border-8 border-cream"
            >
              <img
                src={item.imgUrl}
                alt="category__item"
                className="w-full h-40 object-cover"
              />

              <div className="p-4 w-full truncate bg-gradient-to-t from-cream via-cream to-transparent">
                <h6 className="text-xl font-semibold">{item.display}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className=" mb-6 pt-6 text-center">
          <Link to='/stores' className="text-3xl font-bold text-center border-solid border-gray-500 border no-underline text-black">Explore Stores</Link>
        </div>
      </Row>
    </Container>
  );
};

export default Category;

//{Groceries,Personal Care,Home & Living,Electronics & Gadgets,Fashion & Accessories
//Pharmacy & Wellness, Pet Supplies,  Stationery & Office Supplies ,  Books & Entertainment
//Local Services, Food & Beverages, Gifts & Special Occasions, Sports & Fitness, Automotive
//Local Artisans & Crafts,
