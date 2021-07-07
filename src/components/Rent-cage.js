import React from 'react';
import img2 from '../assets/baseballimg.jpg'
import img from '../assets/Ground-img1.jpg'
import img3 from '../assets/ballimg2.jpg'
import { Modal, ResponsiveEmbed } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import cage1 from "../assets/cage1.png";
import cage2 from "../assets/cage2.png";
import cage3 from "../assets/cage3.png";
import AOS from 'aos';
import Axios from 'axios'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './calender.css'


class Rentcage extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state =
        {
            show: false,
            slots: [],
            errormsg: "",
            Data:
            {
                Arena: "",
                Amount: 0,
                selectedDay: null,
                selectedSlot: ""

            }
        }

    }
    componentDidMount() {
        AOS.init({ duration: 1700 });
    }
    getData = () => {
        let dataurl = 'https://dingers-training.herokuapp.com/availabiliy/check?date=2021-07-08&arena=1';
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
                show: false,
                Data:
                {
                    Arena: "",
                    Amount: 0,
                    selectedDay: null,
                    selectedSlot:""
                }
            }
        )
    }

    preference = (event) => {
        this.setState(
            {
                ...this.state,
                show: true,
                Data:
                {
                    ...this.state.Data,
                    Arena: event.target.name
                }
            }
        )
    }
    handleDayClick(day, { selected }) {
        this.setState({
            ...this.state,
            Data:
            {   ...this.state.Data,
                selectedDay: selected ? undefined : day,
            }
        });
    }
    timings = (event) => {
        this.setState(
            {
                ...this.state,
                Data:
                {
                    ...this.state.Data,
                    selectedSlot: event.target.value
                }
            }
        )
    }
    
    render() {
        return (
            <>
                

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

                <section className="my-5">
                    <div className="container-fluid">
                        <div
                            className="row p-4 text-white"
                            style={{ backgroundColor: "#40ad6d" }}
                        >
                            <div className="col-md-12 text-center">
                                <h3 id="dinger-heding">DINGERS CAGE RENTAL PRICE LIST</h3>
                            </div>
                        </div>

                        <div className="container  mt-4">
                            <div className="row" id="cage-row">
                                <div className="col-md-4 d-flex align-items-center">
                                    <img
                                        className="img-fluid py-2"
                                        src={cage1}
                                        alt="/"

                                    />
                                </div>
                                <div className="col-md-8 p-4">
                                    <div className="row p-4">
                                        <div className="col-md-6 ">
                                            <h4 className="Foot-cage">35 Foot Cage (without machine)</h4>
                                            <h5 className="Foot-cage-paragraph">
                                                Includes Ball, Pitching Screen and Tee.
                                            </h5>
                                        </div>
                                        <div className="col-md-3">
                                            <h3 className="Foot-cage-price text-center pt-2">
                                                <h5>32.00</h5>
                                            </h3>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <button className="btn btn-sm btn-success pt-2" onClick={this.preference} name="35 Foot Ground without Machine">Book</button>
                                        </div>
                                    </div>
                                    <hr id="hrline" className="mx-3 bg-success" />
                                    <div className="row p-4">
                                        <div className="col-md-6">
                                            <h4 className="Foot-cage">35 Foot Cage (without machine)</h4>
                                            <h5 className="Foot-cage-paragraph">
                                                Includes Ball, Pitching Screen and Tee.
                                            </h5>
                                        </div>
                                        <div className="col-md-3 text-center pt-2">
                                            <h3 className="Foot-cage-price">
                                                <h5>32.00</h5>
                                            </h3>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <button className="btn btn-sm btn-success  pt-2" onClick={this.preference} name="35 Foot Ground with Machine">Book</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="container mt-4">
                            <div className="row" id="cage-row">
                                <div className="col-md-4 d-flex align-items-center">
                                    <img
                                        className="img-fluid py-2"
                                        src={cage1}
                                        alt="/"

                                    />
                                </div>
                                <div className="col-md-8 p-4">
                                    <div className="row p-4">
                                        <div className="col-md-6 ">
                                            <h4 className="Foot-cage">35 Foot Cage (without machine)</h4>
                                            <h5 className="Foot-cage-paragraph">
                                                Includes Ball, Pitching Screen and Tee.
                                            </h5>
                                        </div>
                                        <div className="col-md-3">
                                            <h3 className="Foot-cage-price text-center pt-2">
                                                <h5>32.00</h5>
                                            </h3>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <button className="btn btn-sm btn-success pt-2" onClick={this.preference} name="35 Foot Ground without Machine">Book</button>
                                        </div>
                                    </div>
                                    <hr id="hrline" className="mx-3 bg-success" />
                                    <div className="row p-4">
                                        <div className="col-md-6">
                                            <h4 className="Foot-cage">35 Foot Cage (without machine)</h4>
                                            <h5 className="Foot-cage-paragraph">
                                                Includes Ball, Pitching Screen and Tee.
                                            </h5>
                                        </div>
                                        <div className="col-md-3 text-center pt-2">
                                            <h3 className="Foot-cage-price">
                                                <h5>32.00</h5>
                                            </h3>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <button className="btn btn-sm btn-success pt-2" onClick={this.preference} name="35 Foot Ground with Machine">Book</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="container mt-4">
                            <div className="row" id="cage-row">
                                <div className="col-md-4 d-flex align-items-center">
                                    <img
                                        className="img-fluid py-2"
                                        src={cage1}
                                        alt="/"

                                    />
                                </div>
                                <div className="col-md-8 p-4">
                                    <div className="row p-4 ">
                                        <div className="col-md-6 ">
                                            <h4 className="Foot-cage">35 Foot Cage (without machine)</h4>
                                            <h5 className="Foot-cage-paragraph">
                                                Includes Ball, Pitching Screen and Tee.
                                            </h5>
                                        </div>
                                        <div className="col-md-3">
                                            <h3 className="Foot-cage-price text-center pt-2">
                                                <h5>32.00</h5>
                                            </h3>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <button className="btn btn-sm btn-success pt-2" onClick={this.preference} name="35 Foot Ground without Machine">Book</button>
                                        </div>
                                    </div>
                                    <hr id="hrline" className="mx-3 bg-success" />
                                    <div className="row p-4">
                                        <div className="col-md-6">
                                            <h4 className="Foot-cage">35 Foot Cage (without machine)</h4>
                                            <h5 className="Foot-cage-paragraph">
                                                Includes Ball, Pitching Screen and Tee.
                                            </h5>
                                        </div>
                                        <div className="col-md-3 text-center pt-2">
                                            <h3 className="Foot-cage-price">
                                                <h5>32.00</h5>
                                            </h3>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <button className="btn btn-sm btn-success pt-2" onClick={this.preference} name="35 Foot Ground with Machine">Book</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





                <Modal size="lg" show={this.state.show}  >
                    <Modal.Header className=" text-white" id="samecolor" ><span className=".modal"><h2 >Get Book Your court</h2></span></Modal.Header>
                    <Modal.Body className=".modal text-center" >
                        <div className="card">

                            <div className="card-body ">
                                <div className="row">
                                    <div className="col-md-8 d-flex justify-content-center">

                                        <DayPicker
                                            id="table1"
                                            selectedDays={this.state.Data.selectedDay}
                                            onDayClick={this.handleDayClick}
                                            disabledDays={[
                                                {

                                                    before: new Date(),
                                                },
                                            ]}
                                        />
                                    </div>
                                    <div className="col-md-4 ">

                                        <h3>Time slots</h3>

                                        <div id="slot-timings">
                                            {
                                                this.state.slots.map((list) => {
                                                    return (
                                                        <ul className="list-group">
                                                            <input type="text" className="btn  btn-success text-weight-bold" value={list} onClick={this.timings} />
                                                        </ul>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={{ pathname: '/add-cart', transfer: { "cardData": this.state.Data } }} className="btn btn-success mt-5" >Add to card</Link>
                        <button className="btn btn-danger mt-5" onClick={this.modal_deactive}>close</button>
                    </Modal.Body>

                </Modal>

                {
                    console.log(this.state.Data.selectedSlot)
                }
            </>
        )
    }

}


export default Rentcage




