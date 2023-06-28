import React from 'react';
import PropTypes from "prop-types";
import { v4 } from 'uuid';

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
        <form onSubmit={handleNewMerchSubmission}>
            <input
                type='text'
                name='name'
                placeholder='Name' />
            <input
                type='text'
                name='description'
                placeholder='Description' />
            <input
                type='number'
                name='quantity'
                placeholder='Quantity' />
            <button type='submit'>Add Merch</button>
        </form>
        </React.Fragment>
    );
}

NewMerchForm.propTypes = {
    onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;