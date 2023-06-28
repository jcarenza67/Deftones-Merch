import React from "react";
import CartItem from "./CartItem";


function Cart ({ cartItems, removeFromCart }) {
    return (
        <div>
            <h1>Cart</h1>
            {cartItems.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cartItems.map((item) => (
                    <CartItem key={item.id} 
                    item={item} 
                    removeFromCart={removeFromCart} 
                    />
                ))
                )}
        </div>
    );
}

export default Cart;