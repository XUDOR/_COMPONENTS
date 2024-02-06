import React from "react";
import CartItem from "./CartItem";
import Total from "./Total";

const Cart = ({cartItems, onRemoveFromCart}) => (
  <div>
    <h2>CART</h2>
    {cartItems.map((item) => (  
      <CartItem key={item.id} item={item} onRemoveFromCart={onRemoveFromCart} />
    ))}
    <Total cartItems={cartItems} />
  </div>
);

export default Cart;