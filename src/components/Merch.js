import React from "react";
import PropTypes from "prop-types";

function Merch(props){
  return (
  <React.Fragment>
    <div onClick = {() => props.whenMerchClicked(props.id)}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.quantity}</p>
    </div>
  </React.Fragment>
  );
}

Merch.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    whenMerchClicked: PropTypes.func
};

export default Merch;