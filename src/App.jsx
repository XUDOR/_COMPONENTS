import React, { useState } from 'react';
import ProductList from './components/Cart/ProductList';
import Cart from './components/Cart/Cart';
import './App.css';

// Product Data
const InitialProducts = [
  { id: 1, name: 'Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', price: 19.99 },
  { id: 3, name: 'Product 3', price: 39.99 },
  { id: 4, name: 'Product 4', price: 9.99 },
];

function App() {
  const [products] = useState(InitialProducts);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...productExists, quantity: productExists.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleDecreaseInCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists && productExists.quantity > 1) {
      setCartItems(
        cartItems.map((item) =>
        item.id === product.id ? { ...productExists, quantity: productExists.quantity -1} : item
      )
    );
    } else if (productExists) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };

  const handleRemoveFromCart = (productId) => {
      setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    
    <div className="app">
      
      <ProductList products={products} onAddToCart={handleAddToCart} onDecreaseInCart={handleDecreaseInCart}/>
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}

export default App;
