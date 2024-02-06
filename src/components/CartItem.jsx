import React from "react";

const CartItem = ({ item, onRemoveFromCart }) => (
  <div className="cart-item">
    <span className="item-name">{item.name}</span>
    <span className="item-price">${item.price.toFixed(2)}</span>
    <button className="remove-item" onClick={() => onRemoveFromCart(item.id)}>-</button>
  </div>
);

export default CartItem;