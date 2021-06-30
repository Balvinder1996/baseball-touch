import React, { Component } from "react";
import PaypalButtons from "./paypal/PaypalButtons";


class Payment extends Component {

    render() {
            return (
                <>
                    <PaypalButtons amount = '1' />
                </>
            );
    }
}

export default Payment;
