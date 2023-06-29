import React from "react";

function CartItem({ item, removeFromCart }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{item.quantity}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;