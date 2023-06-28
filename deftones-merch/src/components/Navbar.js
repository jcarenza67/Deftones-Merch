import React from "react";
import CartWidget from "./CartWidget";

function Navbar({ cart }){
    <React.Fragment>
        <h1>Deftones Merch</h1>
        <CartWidget cart={cart} />
    </React.Fragment>
}

export default Navbar;