import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types";

const mainMerchList = [
  {
    name: 'reco',
    description: 'loud and fast',
    quantity: 13
  },
  {
    name: 'deco',
    description: 'slow jams',
    quantity: 1
  },
  {
    name: 'farg0',
    description: 'ska',
    quantity: 55
  },
  {
    name: 'sloshy',
    description: 'sloppy, older',
    quantity: 4
  },
];

function MerchList(props){
    return (
        <React.Fragment>
        <hr/>
        {mainMerchList.map((merch, index) =>
            <Merch 
            name={merch.name}
            description={merch.description}
            quantity={merch.quantity}
            key={index}/>
        )}
        {props.mainMerchList.map((merch, index) =>
            <Merch 
            name={merch.name}
            description={merch.description}
            quantity={merch.quantity}
            key={index}/>
        )}
        </React.Fragment>
    );
}

MerchList.propTypes = {
  mainMerchList: PropTypes.array
}

export default MerchList;

