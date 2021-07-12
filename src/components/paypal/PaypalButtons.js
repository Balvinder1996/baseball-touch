import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import img from '../../assets/paypal.gif';
import succes from '../../assets/succes.gif';
import tick from '../../assets/tick.gif';
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
                Arena: "",
                Amount: "",
                Day: "",
                Time: "",

            },
            pushData:
            {
                booking_time: "",
                arena: "",
                name: "",
                email: "",
                mobile_number: null,
                amount: 0
            }
        };


        window.React = React;
        window.ReactDOM = ReactDOM;
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        const Arena = sessionStorage.getItem('Arena');
        const Amount = sessionStorage.getItem('Amount');
        const Day = sessionStorage.getItem('selectedDay');
        const time = sessionStorage.getItem('selectedSlot');
        const arena_no = sessionStorage.getItem('arena_no');
        const booking_time=sessionStorage.getItem('booking_time')

        this.setState(
            {
                ...this.state,

                Data:
                {
                    Arena: Arena,
                    Amount: Amount,
                    Day: Day,
                    Time: time
                },
                pushData:
                {
                    ...this.state.pushData,
                    booking_time:booking_time,
                    arena:arena_no,
                    amount:Amount
                }

            }
        )
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
                axios.post(DataUrl, this.state.pushData).then((response) => {
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
    userdetails = (event) => {
        this.setState(
            {
                ...this.state,
                pushData:
                {
                    ...this.state.pushData,
                    [event.target.name]: event.target.value,

                }

            }
        ); console.log(this.state.pushData)
    }

    render() {
        const { showButtons, paid } = this.state;

        return (
            <div>

                {showButtons && (

                    <section className="py-5 bg-light" id="samecolor">

                        <div className="container bg-white" id="payment_container">
                            <div className="row">
                                <div className="col-md-6 pl-5 pt-4">
                                    <div className="my-2" >
                                        <h2 className="font-weight-bold " style={{ color: "#40ad6d" }}>Order Summary</h2>
                                    </div>
                                    <hr id="hrline" />
                                    <div className="mt-3">
                                        <table className="table my-2 table-hover table4 text-center text-white">
                                            <tbody>
                                                <tr>
                                                    <td><h5>Ground preference</h5></td>
                                                    <td><h5>{this.state.Data.Arena}</h5></td>
                                                </tr>

                                                <tr>
                                                    <td><h5>Amount</h5></td>
                                                    <td><h5>{this.state.Data.Amount}</h5></td>
                                                </tr>
                                                <tr>
                                                    <td><h5>Date Slot</h5></td>
                                                    <td><h5>{this.state.Data.Day}</h5></td>
                                                </tr>
                                                <tr>
                                                    <td><h5>Time Slot</h5></td>
                                                    <td><h5>{this.state.Data.Time}</h5></td>
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
                                                    <input type="text" name="name" class="formStyle" placeholder="Name (required)" value={this.state.pushData.name} onChange={this.userdetails} required />
                                                </div>
                                                <div>
                                                    <input type="email" name="email" class="formStyle" placeholder="Email (required)" value={this.state.pushData.email} onChange={this.userdetails} />
                                                </div>
                                                <div>
                                                    <input type="text" name="mobile_number" class="formStyle" placeholder="Number (required)" value={this.state.pushData.mobile_number} onChange={this.userdetails} required />
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

                                <div className="col-md-6 bg-light pt-5">
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
                        <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center p-4">
                    <div className="col-md-4 " id="payment-container">
                        <div className="row d-flex justify-content-center pt-5">
                            <img src={succes} alt="/" style={{width:'126px',height:'102px'}} />
                        </div>
​
                        <div className="row d-flex justify-content-center p-5 text-center">
                            <h3>Cogratulations</h3>
                            <p>Your payment is received and booking is confirmed.<br/>Thank you for choosing Dinger!!!</p>
                        </div>
​
                        <div className="row d-flex justify-content-center pb-5 ">
                           <Link to="/"><button className="btn btn-primary" id="Done-btn">Done</button></Link>
                        </div>
                    </div>
                </div>
            </div>  
                    )
                }
            </div >
        );
    }
}
export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`)(PaypalButton);
