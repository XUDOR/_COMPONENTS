import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onAddToCart }) => (
  <div>
    {products.map((product) => (
      ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
    ))}
  </div>
);

export default ProductList;