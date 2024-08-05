import React from "react";
import './productlist.css'
import product_06_image_03 from "../../assets/images/bread(3).png";

const ProductList = () => {
  return (
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
    </div>
  );
};

export default ProductList;
