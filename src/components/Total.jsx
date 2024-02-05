import React from "react";

const Total = ({ cartItems }) => {
  const total = cartItems.reduce((acc,item) => acc + item.price, 0);

  return (
    <div>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );  
};

export default Total;