import React from "react";
import MerchForm from "./MerchForm";
import MerchList from "./MerchList";

class MerchControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainMerchList: []
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }));
    }

    handleAddingNewMerchToList = (newMerch) => {
        const newMainMerchList = this.state.mainMerchList.concat(newMerch);
        this.setState({mainMerchList: newMainMerchList,
                        formVisibleOnPage: false });
    }

    render(){
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <MerchForm onNewMerchCreation={this.handleAddingNewMerchToList} />;
            buttonText = "Return to Merch List";
        } else {
            currentlyVisibleState = <MerchList mainMerchList={this.state.mainMerchList} />;
            buttonText = "Add Merch";
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }
}

export default MerchControl;