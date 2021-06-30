import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";


const CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID;

let PayPalButton = null;
class PaypalButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showButtons: false,
            paid: false,
            checkout_amount: props.amount,
        };


        window.React = React;
        window.ReactDOM = ReactDOM;
    }

    componentDidMount() {
        const { isScriptLoaded, isScriptLoadSucceed } = this.props;

        if (isScriptLoaded && isScriptLoadSucceed) {
            PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
            this.setState({ loading: false, showButtons: true });
        }
    }

    componentWillReceiveProps(nextProps) {
        const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

        const scriptJustLoaded =
            !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

        if (scriptJustLoaded) {
            if (isScriptLoadSucceed) {
                PayPalButton = window.paypal.Buttons.driver("react", {
                    React,
                    ReactDOM
                });
                this.setState({ loading: false, showButtons: true });
            }
        }
    }
    createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: +"demo payment",
                    amount: {
                        currency_code: "USD",
                        value: this.state.checkout_amount
                    }
                }
            ]
        });
    };

    onApprove = (data, actions) => {
        actions.order.capture().then(details => {
            const paymentData = {
                payerID: data.payerID,
                orderID: data.orderID
            };
            console.log("Payment Approved: ", paymentData);
            this.setState({ showButtons: false, paid: true });
        });
    };

    render() {
        const { showButtons, paid } = this.state;

        return (
            <div>

                {showButtons && (
                    <div>
                        <div>
                            <h2>Items: demo payment</h2>
                            <h2>Total checkout Amount ${this.state.checkout_amount}</h2>
                        </div>

                        <PayPalButton
                            createOrder={(data, actions) => this.createOrder(data, actions)}
                            onApprove={(data, actions) => this.onApprove(data, actions)}
                        />
                    </div>
                )}

                {paid && (
                    <div>
                        <h2> Congrats! your payment is done successfully !!! </h2>
                    </div>
                )}
            </div>
        );
    }
}

export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`)(PaypalButton);
