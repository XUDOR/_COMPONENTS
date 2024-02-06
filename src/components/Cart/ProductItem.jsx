import React from "react";

const ProductItem = ({ product, onAddToCart }) => (
  <div className="product-tile">
    <h3 className="product-name">{product.name}</h3>
    <p className="product-price">${product.price}</p>
    <button className="add-product"onClick={()=> onAddToCart(product)}>+</button>
  </div>  
);

export default ProductItem;
