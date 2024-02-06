import React from "react";

const CartItem = ({ item, onRemoveFromCart }) => (
  <div>
    <span>{item.name}</span>
    <span>   {item.price}</span>
    <button onClick={() => onRemoveFromCart(item.id)}>-</button>
  </div>
);

export default CartItem;