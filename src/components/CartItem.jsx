import React from "react";

const cartItem = ({ item, onRemoveFromCart }) => (
  <div>
    <span>{item.name}</span>
    <span>{item.price}</span>
    <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
  </div>
);

export default cartItem;