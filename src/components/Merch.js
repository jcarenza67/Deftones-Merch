import React from "react";
import PropTypes from "prop-types";

function Merch(props){
    return (
    <React.Fragment>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>{props.quantity}</p>
    </React.Fragment>
    );
}

Merch.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
};

export default Merch;