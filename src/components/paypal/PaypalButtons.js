import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import img from '../../assets/paypal.gif'
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
                    <section className="py-5" id="samecolor">
                        <div className="container bg-white" id="payment_container">
                            <div className="row">
                                <div className="col-md-6 pl-5 pt-4">
                                    <div className="my-2" >
                                        <h2 className="font-weight-bold ">Order summary</h2>
                                    </div>
                                    <hr id="hrline" />
                                    <div className="mt-3">
                                        <table className="table my-2 table-hover table4 text-center text-white">
                                            <tbody>
                                                <tr>
                                                    <td><h5>Ground preference</h5></td>
                                                    <td><h5>35 Foot</h5></td>
                                                </tr>
                                                <tr>
                                                    <td><h5>Machine Details</h5></td>
                                                    <td><h5>Machine Included</h5></td>
                                                </tr>
                                                <tr>
                                                    <td><h5>Booking Date</h5></td>
                                                    <td><h5>25/07/2021</h5></td>
                                                </tr>
                                                <tr>
                                                    <td><h5>Time Slot</h5></td>
                                                    <td><h5>6 to 7 pm</h5></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <hr id="hrline" />
                                    <div className="my-2">
                                        <h3 className="font-weight-bold mx-3">Other Details:-</h3>
                                        <div className="ml-5">
                                            <form >
                                                <div>
                                                    <input type="text" name="name" class="formStyle" placeholder="Name (required)" required />
                                                </div>
                                                <div>
                                                    <input type="email" name="email" class="formStyle" placeholder="Email (required)" required />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <hr id="hrline" />

                                    <div className=" ml-3 py-4">

                                        <Link to="add-cart"><i class="fa fa-arrow-left px-3 text-danger" aria-hidden="true"></i></Link>  Back to Add to card...
                                    </div>
                                </div>

                                {/* Payment methods */}

                                <div className="col-md-6 bg-light">
                                    <div className="text-center mt-3">
                                        <h3 className="font-weight-bold">Payment Modes:-</h3>
                                        <div id="fixed-height" className="mt-5">
                                            <div>
                                                <img src={img} className="img-fluid" alt="/" />
                                            </div>
                                            <PayPalButton
                                                createOrder={(data, actions) => this.createOrder(data, actions)}
                                                onApprove={(data, actions) => this.onApprove(data, actions)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    // <div>
                    //     <div>
                    //         <h2>Items: demo payment</h2>
                    //         <h2>Total checkout Amount ${this.state.checkout_amount}</h2>
                    //     </div>

                    //     <PayPalButton
                    //         createOrder={(data, actions) => this.createOrder(data, actions)}
                    //         onApprove={(data, actions) => this.onApprove(data, actions)}
                    //     />
                    // </div>
                )
                }

                {
                    paid && (
                        <section className="my-5" id="addcartsection">
                            <div className="container">
                                <div>fgj</div>
                            </div>
                        </section>
                    )
                }
            </div >
        );
    }
}

export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`)(PaypalButton);
