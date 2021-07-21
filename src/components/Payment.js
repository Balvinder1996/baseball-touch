import React, { Component } from "react";
import PaypalButtons from "./paypal/PaypalButtons";


class Payment extends Component {

    render() {
            return (
            
                <>
                    <PaypalButtons amount = {sessionStorage.getItem('Amount')} />
                </>
            );
    }
}

export default Payment;
