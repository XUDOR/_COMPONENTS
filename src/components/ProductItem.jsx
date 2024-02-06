import React from "react";

const ProductItem = ({ product, onAddToCart }) => (
  <div className="product-tile">
    <h3 className="product-name">{product.name}</h3>
    <p>${product.price}</p>
    <button onClick={()=> onAddToCart(product)}>Add to Cart</button>
  </div>  
);

export default ProductItem;
