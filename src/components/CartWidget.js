import React from "react";


function CartWidget({ cartItems }) {
    return (
        <div>
            <p>{cartItems && cartItems.length}</p>
        </div>
    );
}

export default CartWidget;