import React from "react";
import { useParams } from "react-router-dom";

function Product() {
    const { category, id } = useParams();

  return (
    <div>
        <p>Category: {category}</p>
        <p>Product ID: {id}</p>
      <h1>Product Page</h1>
      <p>This is a product page.</p>
    </div>
  );
}

export default Product;