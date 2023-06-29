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
    name: 'deco miami style',
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
    {mainMerchList.map((merch) =>
      <Merch
      whenMerchClicked = { props.onMerchSelection}
      name={merch.name}
      description={merch.description}
      quantity={parseInt(merch.quantity)}
      id={merch.id}
      key={merch.id}/>
    )}
    {props.mainMerchList.map((merch) =>
      <Merch 
      whenMerchClicked = { props.onMerchSelection }
      name={merch.name}
      description={merch.description}
      quantity={parseInt(merch.quantity)}
      id={merch.id}
      key={merch.id}/>
    )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  mainMerchList: PropTypes.array,
  onMerchSelection: PropTypes.func
}

export default MerchList;

