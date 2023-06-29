import React from 'react';
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";


function NewMerchForm(props) {

  function handleNewMerchSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({
    name: event.target.name.value,
    description: event.target.description.value,
    quantity: event.target.quantity.value,
    id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewMerchSubmission}
        buttonText="Add" />
    </React.Fragment>
  );
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;