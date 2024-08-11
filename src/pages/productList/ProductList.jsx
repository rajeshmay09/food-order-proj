import React, { useState } from "react";
import "./productlist.css";
import "../../styles/all-foods.css";
import "../../styles/pagination.css";

import { useSelector, useDispatch } from "react-redux";
import { selectProductsByStore } from "../../store/slices/productslice";
import ProductCard from "../../components/UI/product-card/ProductCard";
import { Col, Container, Row } from "reactstrap";
import ReactPaginate from "react-paginate";

const ProductList = () => {
  const products = useSelector(selectProductsByStore);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section className="pt-4 pb-4">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="6" xs="12">
            <div className="search__widget flex items-center justify-between w-1/2 text-slate-50">
              <input
                className="bg-transparent"
                type="text"
                placeholder="I'm looking for...."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </Col>
          <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
            <div className="sorting__widget text-end">
              <select className="w-50">
                <option>Default</option>
                <option value="ascending">Alphabetically, A-Z</option>
                <option value="descending">Alphabetically, Z-A</option>
                <option value="high-price">High Price</option>
                <option value="low-price">Low Price</option>
              </select>
            </div>
          </Col>
          {displayPage.map((item) => (
            <Col lg="4" md="6" sm="6" xs="6" key={item.id} className="mb-4">
              <ProductCard item={item} />
            </Col>
          ))}
          <div>
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              containerClassName=" paginationBttns "
            />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default ProductList;
{
  /**
  <div class="product-card">
      <div class="product-image">
        <img src={product_06_image_03} alt="Product Image" />
      </div>
      <div class="product-info">
        <h2 class="product-name">Product Name</h2>
        <p class="product-description">Product Description</p>
        <p class="product-price">$19.99</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div> */
}
