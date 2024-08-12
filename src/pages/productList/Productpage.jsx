import React, { useState } from "react";
import "./productpage.css";

const Productpage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const product = {
    name: "Awesome Product",
    price: 19.99,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1693221848619-5cda3e687a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "This is a great product! It has many features and is very affordable.",
    specifications: [
      { name: "Feature 1", value: "Value 1" },
      { name: "Feature 2", value: "Value 2" },
      { name: "Feature 3", value: "Value 3" },
    ],
    reviews: [
      { rating: 5, comment: "Amazing product!" },
      { rating: 4, comment: "Great value for money." },
      { rating: 3, comment: "Could be better." },
    ],
  };

  const product5 = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1681506669115-cb6b2d30dbc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXJsfGVufDB8fDB8fHww",
      description: "A great product description for Product 1.",
      reviews: [
        {
          rating: 5,
          comment: "This is a fantastic product! I highly recommend it.",
        },
        {
          rating: 4,
          comment: "A good product, but could use some improvements.",
        },
      ],
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1670305512925-1b1c27107597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
      description: "A compelling product description for Product 2.",
      reviews: [
        {
          rating: 5,
          comment: "I love this product! It exceeded my expectations.",
        },
      ],
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
      imageUrl:
        "https://images.unsplash.com/photo-1721908919551-46f452378140?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "An engaging product description for Product 3.",
      reviews: [
        {
          rating: 4,
          comment: "A solid product with good features.",
        },
        {
          rating: 3,
          comment: "Not the best product I've used, but it gets the job done.",
        },
      ],
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="product-display-page">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <h2>Specifications</h2>
        <ul>
          {product.specifications.map((spec) => (
            <li key={spec.name}>
              <strong>{spec.name}:</strong> {spec.value}
            </li>
          ))}
        </ul>
        <h2>Reviews</h2>
        {product.reviews.length > 0 ? (
          <ul>
            {product.reviews.map((review) => (
              <li key={review.comment}>
                <strong>Rating:</strong> {review.rating}/5
                <br />
                {review.comment}
              </li>
            ))}
          </ul>
        ) : (
          <p>There are no reviews yet.</p>
        )}
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Productpage;

{
  /**
   * <div className="product-display">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-actions">
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div className="product-reviews">
        <h3>Reviews</h3>
       
        <div className="review">
          <h4>John Doe</h4>
          <p>This product is amazing! I highly recommend it.</p>
        </div>
        
      </div>
      <div className="product-comments">
        <h3>Comments</h3>
        <div className="comment">
          <h4>Jane Smith</h4>
          <p>I'm so happy with this purchase!</p>
        </div>
      
      </div>
    </div>
   * 
   * 
   * 
   * 
    <div className="product-display">
      <div className="product-list">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <div className="product-details">
          <h2>{selectedProduct.name}</h2>
          <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
          <p>${selectedProduct.price.toFixed(2)}</p>
          <p>{selectedProduct.description}</p>
          <h3>Reviews</h3>
          {selectedProduct.reviews.length > 0 ? (
            <ul>
              {selectedProduct.reviews.map((review, index) => (
                <li key={index}>
                  <span className="rating">{review.rating}/5</span>
                  <span>{review.comment}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      )}
    </div> */
}
