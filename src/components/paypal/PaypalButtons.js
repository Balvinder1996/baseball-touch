import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import img from '../../assets/paypal.gif';
import tick from '../../assets/tick.gif'
import scriptLoader from "react-async-script-loader";
import axios from "axios";
import { getImageListItemBarUtilityClass } from "@material-ui/core";


const CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID;

let PayPalButton = null;
class PaypalButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showButtons: false,
            paid: false,
            checkout_amount: props.amount,
            Data:
            {
                booking_time: "2021-07-13 06:00",
                arena: 1,
                name: "deepak",
                email: "deepak@gmail.com",
                mobile_number: 1234567891,
                amount: 500
            }
        };


        window.React = React;
        window.ReactDOM = ReactDOM;
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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
                    description: +"Name",
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
                orderID: data.orderID,


            };
            if (details.status == "COMPLETED") {
                let DataUrl = `https://dingers-training.herokuapp.com/cage/booking`;
                axios.post(DataUrl, this.state.Data).then((response) => {
                    console.log("success")
                }).catch((error) => {
                    console.error(error)
                })
            }

            console.log(details.status)
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
                                        <h2 className="font-weight-bold " style={{ color: "#40ad6d" }}>Order summary</h2>
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
                                            <div >
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

                )
                }

                {
                    paid && (
                        <section className="py-5" id="addcartsection">
                            <div className="container">
                                <section className="py-5" id="addcartsection">
                                    <div className="container">
                                        <div className="row  d-flex justify-content-center" >
                                            <div className='col-md-4 bg-white px-5' id="congrats">
                                                <div className="text-center pt-2">
                                                    <h2 className="py-3 pb-4">Congratulations !!!</h2>
                                                    <img src={tick} width="95" height="95" />
                                                    <p className="py-5">Your Booking is Confirmed and recorded.You can continue other booking successfully.
                                                        <i class="fa fa-thumbs-up text-success px-2" aria-hidden="true"></i>

                                                    </p>
                                                </div>
                                                <div className="pb-3">
                                                    <h4><Link to="/"><i class="fa fa-home text-success px-3" aria-hidden="true"></i>
                                                    </Link><span style={{ fontSize: "15px" }}>Back to home</span></h4>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </section>
                    )
                }
            </div >
        );
    }
}

export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`)(PaypalButton);
