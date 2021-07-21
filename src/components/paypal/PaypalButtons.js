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
            button_status: false,
            display_time:"",
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
        const booking_time = sessionStorage.getItem('booking_time');
        const display_time = sessionStorage.getItem('display_time')


        this.setState(
            {
                ...this.state,
                display_time:display_time,

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
                    booking_time: booking_time,
                    arena: arena_no,
                    amount: Amount
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
                let DataUrl = `http://161.35.97.122/cage/booking`;
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
    submit = (event) => {
        event.preventDefault();
        this.setState(
            {
                ...this.state,
                button_status: true
            }
        )


    }
    render() {
        const { showButtons, paid } = this.state;

        return (
            <div>

                {showButtons && (

                    <section className="py-5 " id="samecolor">

                        <div className="container" >
                            <div className="row mx-5 bg-white" id="payment_container">
                                <div className="col-md-6 pl-5 pt-2">
                                    <div className="my-2" >
                                        <h4 className="font-weight-bold " >Booking Summary</h4>
                                    </div>
                                    <hr id="hrline" />
                                    
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mt-1">
                                                <table className=" table table-hover table4 text-center ">
                                                    <tbody>
                                                        <tr>
                                                            <td>Ground preference</td>
                                                            <td>{this.state.Data.Arena}</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Amount</td>
                                                            <td>{this.state.Data.Amount}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date Slot</td>
                                                            <td>{this.state.Data.Day}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Time Slot</td>
                                                            <td>{this.state.display_time}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <hr id="hrline" />
                                    <div>
                                        <h5 className="font-weight-bold mx-3">Other Details:-</h5>
                                        <div className="ml-4">
                                            <form onSubmit={this.submit}>
                                                <div>
                                                    <input type="text" name="name" class="formStyle" placeholder="Name (required)" value={this.state.pushData.name} onChange={this.userdetails} required />
                                                </div>
                                                <div>
                                                    <input type="email" name="email" class="formStyle" placeholder="Email (required)" value={this.state.pushData.email} onChange={this.userdetails} required />
                                                </div>
                                                <div>
                                                    <input type="number" name="mobile_number" class="formStyle" placeholder="Number (required)" value={this.state.pushData.mobile_number} onChange={this.userdetails} required />
                                                </div>
                                                <input type="submit" value="submit" className="btn btn-sm font-weight-bold" id="submit" />
                                            </form>
                                        </div>
                                    </div>
                                    

                                    <div className=" pt-3 pb-3">

                                        <Link to="add-cart"><i class="fa fa-arrow-left px-3 text-danger pb-1" aria-hidden="true"></i></Link>  Back to Add to card...
                                    </div>
                                </div>

                                {/* Payment methods */}

                                <div className="col-md-6 bg-light">
                                    <div className="text-center mt-3">
                                        <h4 className="font-weight-bold ">Payment Modes:-</h4>
                                        <div >
                                            <div >
                                                <img src={img} className="img-fluid" alt="/" />
                                            </div>

                                            {
                                                this.state.button_status ?
                                                    <React.Fragment>
                                                        <div className="mt-3" id="fixed-height">
                                                            
                                                            <PayPalButton
                                                                createOrder={(data, actions) => this.createOrder(data, actions)}
                                                                onApprove={(data, actions) => this.onApprove(data, actions)}

                                                            />

                                                        </div>
                                                    </React.Fragment>
                                                    :
                                                    <div className="mt-3 pt-5 ">
                                                        <h3>Please fill and submit your details first to proceed the payment.</h3>
                                                    </div>
                                            }

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
                                        <img src={succes} alt="/" style={{ width: '126px', height: '102px' }} />
                                    </div>

                                    <div className="row d-flex justify-content-center p-5 text-center">
                                        <h3>Cogratulations</h3>
                                        <p>Your payment is received and booking is confirmed.<br />Thank you for choosing Dingers Training Center!!!</p>
                                    </div>

                                    <div className="row d-flex justify-content-center pb-5 ">
                                        <Link to="/"><button className="btn " id="Done-btn">Done</button></Link>
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
