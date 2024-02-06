import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

//Product Data
const InitialProducts = [
  {id: 1 , name: 'Product 1', price: 29.99 },
  {id: 2 , name: 'Product 2', price: 19.99 },
  {id: 3 , name: 'Product 3', price: 39.99 },
  {id: 4 , name: 'Product 4', price: 9.99 },
];


function App() {
  const [products] = useState(InitialProducts);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item =>item.id!==productId)); 
  };

  return (
    <div className="App">
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />  
      
    </div>
  );
}


export default App;