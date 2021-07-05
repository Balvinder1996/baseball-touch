import React from 'react';
import img2 from '../assets/baseballimg.jpg'
import img from '../assets/Ground-img1.jpg'
import img3 from '../assets/ballimg2.jpg'
import { Modal, ResponsiveEmbed } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import cage from "../assets/cage.png";
import AOS from 'aos';
import Axios from 'axios'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import './calender.css'

import { Carousel } from 'react-bootstrap'

class Rentcage extends React.Component {
    constructor(props) {
        super(props)
        this.state =
        {
            show: false,
            slots: [],
            errormsg: "",
            Data:
            {
                Arena: "",
                Amount: 0,
                selectedDay:""
            }
        }

    }
    componentDidMount() {
        AOS.init({ duration: 1700 });
    }
    getData = () => {
        let dataurl = 'https://dingers-training.herokuapp.com/availabiliy/check?date=2021-07-08';
        Axios.get(dataurl).then((response) => {
            let Data = response.data.time
            this.setState(
                {
                    ...this.state,
                    slots: Data,
                    
                }
            )
        }).catch((error) => {
            this.setState(
                {
                    ...this.state,
                    errormsg: error
                }
            )
        })
    }


    modal_active = () => {
        this.setState(
            {
                ...this.state,
                show: true
            }
        )
    }
    modal_deactive = () => {
        this.setState(
            {
                ...this.state,
                show: false
            }
        )
    }
    setSelectedDay = (req) => {
        let Format=req;
        // let Date=Format.value(Format)
        
        
        this.setState(
            {
               Data:
               {
                   ...this.state,
                   selectedDay: Format
               }
            }
        )
    }
    preference = (event) => {
        this.setState(
            {
                Data:
                {
                    Arena: event.target.name
                }
            }
        )
    }
    render() {
        return (
            <>
            <pre>{JSON.stringify(this.state.Data.selectedDay)}</pre>
                <button onClick={this.getData}>clickhere</button>
                <section className="mt-5">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-8">
                                <h1 className="pl-4 pb-2 display-4" data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">Book Your Cage Now.</h1>
                                <h2 className="pl-4 pb-2" data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">Ground Preferences according to you sutability.</h2>
                                <h5 className="pl-4 pb-2" data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">Dinngger Provides many facilities and rent a cage is one of
                                    them.Checkout your desired renting a cage.Dinngger Provides many facilities and rent a cage is one of
                                    them.Checkout your desired <br />renting a cage.Checkout your desired renting a cage.
                                </h5>
                            </div>
                            <div className="col-md-4 text-center" >
                                <img src={img2} className="img-fluid" />
                            </div>

                        </div>
                        <div className="row animate__animated animate__fadeIn  animate__slow mt-5">
                            <div className="col-md-3 ">
                                <table className="table table-hover text-center table1  table-striped">
                                    <thead>
                                        <tr>
                                            <th colSpan="3"><h4>Cages-70 Foot with Machine</h4></th>
                                        </tr>
                                        <tr>
                                            <th>Name</th>
                                            <th>Timing</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Batting Cage #12M</td>
                                            <td>Half hour</td>
                                            <td>$40</td>
                                        </tr>
                                        <tr>
                                            <td>Batting Cage #12M</td>
                                            <td>One hour</td>
                                            <td>$60</td>
                                        </tr>
                                        <tr>
                                            <td>Batting Cage #34M</td>
                                            <td>Half hour</td>
                                            <td>$40</td>
                                        </tr>
                                        <tr>
                                            <td>Batting Cage #34M</td>
                                            <td>One hour</td>
                                            <td>$40</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-3 ">
                                <table className="table table-hover text-center  table4 text-white  table-striped">
                                    <thead>
                                        <tr>
                                            <th colSpan="3"><h5>Cages-70 Foot without Machine</h5></th>
                                        </tr>
                                        <tr>
                                            <th>Name</th>
                                            <th>Timing</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Batting Cage #12M</td>
                                            <td>Half hour</td>
                                            <td>$30</td>
                                        </tr>
                                        <tr>
                                            <td>Batting Cage #12M</td>
                                            <td>One hour</td>
                                            <td>$50</td>
                                        </tr>
                                        <tr>
                                            <td>Batting Cage #34M</td>
                                            <td>Half hour</td>
                                            <td>$30</td>
                                        </tr>
                                        <tr>
                                            <td>Batting Cage #34M</td>
                                            <td>One hour</td>
                                            <td>$50</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-3 ">
                                <table className="table table-hover table1 text-center  table-striped">
                                    <thead>
                                        <tr>
                                            <th colSpan="3"><h5>Cages-35 Foot Machine</h5></th>
                                        </tr>
                                        <tr>
                                            <th>Name</th>
                                            <th>Timing</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Batting Cage #1M</td>
                                            <td>Half hour</td>
                                            <td>$35</td>
                                        </tr>
                                        <tr>
                                            <td>Batting Cage #1M</td>
                                            <td>One hour</td>
                                            <td>$45</td>
                                        </tr>
                                        <tr>
                                            <td>Batting Cage #3M</td>
                                            <td>Half hour</td>
                                            <td>$35</td>
                                        </tr>
                                        <tr>
                                            <td>Batting Cage #3M</td>
                                            <td>One hour</td>
                                            <td>$45</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-3 ">
                                <table className="table table-hover text-center table4 text-white table-striped">
                                    <thead>
                                        <tr>
                                            <th colSpan="3"><h5>Cages-35 Foot Machine</h5></th>
                                        </tr>
                                        <tr>
                                            <th>Name</th>
                                            <th>Timing</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Batting Cage #1M</td>
                                            <td>Half hour</td>
                                            <td>$35</td>
                                        </tr>
                                        <tr>
                                            <td>Batting Cage #1M</td>
                                            <td>One hour</td>
                                            <td>$45</td>
                                        </tr>
                                        <tr>
                                            <td>Batting Cage #3M</td>
                                            <td>Half hour</td>
                                            <td>$35</td>
                                        </tr>
                                        <tr>
                                            <td>Batting Cage #3M</td>
                                            <td>One hour</td>
                                            <td>$45</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

{/* Add to card starts here */}

                <section>
                    <div className="container-fluid">
                        <div
                            className="row p-4 text-white"
                            style={{ backgroundColor: "#6351ce" }}
                        >
                            <div className="col-md-12 text-center">
                                <h3 id="dinger-heding">DINGERS CAGE RENTAL PRICE LIST</h3>
                            </div>
                        </div>

                        <div className="container  pt-5">
                            <div className="row mb-3" id="cage-row">
                                <div className="col-md-4 p-3">
                                    <img
                                        src={cage}
                                        alt="/"
                                        style={{ width: "250px", height: "125px" }}
                                    />
                                </div>
                                <div className="col-md-4 p-5">
                                    <h4 className="Foot-cage">35 Foot Cage (without machine)</h4>
                                    <h5 className="Foot-cage-paragraph">
                                        Includes Ball, Pitching Screen and Tee.
                                    </h5>
                                </div>
                                <div className="col-md-2  p-5">
                                    <h3 className="Foot-cage-price">
                                        <h5>32.00</h5>
                                    </h3>
                                </div>

                                <div className="col-md-2 p-5">
                                    <button className="btn btn-sm btn-success" onClick={this.preference} name="35 Foot Ground without Machine">Book</button>
                                </div>
                            </div>

                            <div className="row mb-3" id="cage-row">
                                <div className="col-md-4 p-3">
                                    <img
                                        src={cage}
                                        alt="/"
                                        style={{ width: "250px", height: "125px" }}
                                    />
                                </div>
                                <div className="col-md-4 p-5">
                                    <h4 className="Foot-cage">35 Foot Cage (without machine)</h4>
                                    <h5 className="Foot-cage-paragraph">
                                        Includes Ball, Pitching Screen and Tee.
                                    </h5>
                                </div>
                                <div className="col-md-2  p-5">
                                    <h3 className="Foot-cage-price">
                                        <h5>32.00</h5>
                                    </h3>
                                </div>

                                <div className="col-md-2 p-5">
                                    <button className="btn btn-sm btn-success" onClick={this.preference} name="35 Foot Ground with Machine">Book</button>
                                </div>
                            </div>

                            <div className="row mb-3" id="cage-row">
                                <div className="col-md-4 p-3">
                                    <img
                                        src={cage}
                                        alt="/"
                                        style={{ width: "250px", height: "125px" }}
                                    />
                                </div>
                                <div className="col-md-4 p-5">
                                    <h4 className="Foot-cage">35 Foot Cage (without machine)</h4>
                                    <h5 className="Foot-cage-paragraph">
                                        Includes Ball, Pitching Screen and Tee.
                                    </h5>
                                </div>
                                <div className="col-md-2  p-5">
                                    <h3 className="Foot-cage-price">
                                        <h5>32.00</h5>
                                    </h3>
                                </div>

                                <div className="col-md-2 p-5">
                                    <button className="btn btn-sm btn-success" onClick={this.preference} name="70 Foot Without Machine">Book</button>
                                </div>
                            </div>

                            <div className="row mb-3" id="cage-row">
                                <div className="col-md-4 p-3">
                                    <img
                                        src={cage}
                                        alt="/"
                                        style={{ width: "250px", height: "125px" }}
                                    />
                                </div>
                                <div className="col-md-4 p-5">
                                    <h4 className="Foot-cage">35 Foot Cage (without machine)</h4>
                                    <h5 className="Foot-cage-paragraph">
                                        Includes Ball, Pitching Screen and Tee.
                                    </h5>
                                </div>
                                <div className="col-md-2  p-5">
                                    <h3 className="Foot-cage-price">
                                        <h5>32.00</h5>
                                    </h3>
                                </div>

                                <div className="col-md-2 p-5">
                                    <button className="btn btn-sm btn-success" onClick={this.preference} name="70 Foot Without Machine">Book</button>
                                </div>
                            </div>

                            <div className="row mb-3" id="cage-row">
                                <div className="col-md-4 p-3">
                                    <img
                                        src={cage}
                                        alt="/"
                                        style={{ width: "250px", height: "125px" }}
                                    />
                                </div>
                                <div className="col-md-4 p-5">
                                    <h4 className="Foot-cage">35 Foot Cage (without machine)</h4>
                                    <h5 className="Foot-cage-paragraph">
                                        Includes Ball, Pitching Screen and Tee.
                                    </h5>
                                </div>
                                <div className="col-md-2  p-5">
                                    <h3 className="Foot-cage-price">
                                        <h5>32.00</h5>
                                    </h3>
                                </div>

                                <div className="col-md-2 p-5">
                                    <button className="btn btn-sm btn-success" onClick={this.preference} name="Full Facility Without Machine">Book</button>
                                </div>
                            </div>

                            <div className="row mb-3" id="cage-row">
                                <div className="col-md-4 p-3">
                                    <img
                                        src={cage}
                                        alt="/"
                                        style={{ width: "250px", height: "125px" }}
                                    />
                                </div>
                                <div className="col-md-4 p-5">
                                    <h4 className="Foot-cage">35 Foot Cage (without machine)</h4>
                                    <h5 className="Foot-cage-paragraph">
                                        Includes Ball, Pitching Screen and Tee.
                                    </h5>
                                </div>
                                <div className="col-md-2  p-5">
                                    <h3 className="Foot-cage-price">
                                        <h5>32.00</h5>
                                    </h3>
                                </div>

                                <div className="col-md-2 p-5">
                                    <button className="btn btn-sm btn-success" onClick={this.preference} name="Full Facility With Machine">Book</button>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid px-0">
                            <div
                                className="row p-4 text-white text-center"
                                style={{ backgroundColor: "#6351ce" }}
                            >
                                <div className="col-md-12">
                                    <h3>Call or email us to reserve your cage!</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container pt-4 pb-4">
                        <div className="row p-3" id="Book-cage">
                            <div className="col-md-3">
                                <h4 className="Contact-heading">Email</h4>
                            </div>
                            <div className="col-md-3">
                                <h4 className="Contact-heading">
                                    dingerstraining321@gmail.com
                                </h4>
                            </div>
                        </div>

                        <div className="row p-3 mt-3" id="Book-cage">
                            <div className="col-md-3">
                                <h4 className="Contact-heading">Contact Number</h4>
                            </div>
                            <div className="col-md-3">
                                <h4 className="Contact-heading">321-266-5325</h4>
                            </div>
                        </div>
                    </div>
                </section>


                <button onClick={this.modal_active}>lskd</button>


                <Modal size="lg" show={this.state.show}  >
                    <Modal.Header className=" text-white" id="samecolor" ><span className=".modal"><h2 >Get Book Your court</h2></span></Modal.Header>
                    <Modal.Body className=".modal text-center" >
                        <div className="card">

                            <div className="card-body ">
                                <div className="row">
                                    <div className="col-md-8 d-flex justify-content-center">
                                    
                                        <Calendar
                                            req={this.state.Data.selectedDay}
                                            onChange={this.setSelectedDay}
                                            calendarClassName="responsive-calendar" // added this
                                            shouldHighlightWeekends
                                        />
                                    </div>
                                    <div className="col-md-4 ">
                                    
                                        <h3>Time slots</h3>

                                        <div id="slot-timings">
                                            {
                                                this.state.slots.map((list) => {
                                                    return (
                                                        <ul className="list-group">
                                                            <li className="list-group-item my-2 bg-success text-white"> <input class="form-check-input" type="radio" name="same" value="" aria-label="..." />
                                                                {list}</li>
                                                        </ul>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to='/add-cart' ><button className="btn btn-success mt-5" >Add to card</button></Link>
                        <button className="btn btn-danger mt-5" onClick={this.modal_deactive}>close</button>
                    </Modal.Body>

                </Modal>
                
            </>
        )
    }

}


export default Rentcage




