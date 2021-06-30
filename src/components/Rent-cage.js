import React, { useState, useEffect } from 'react';
import img2 from '../assets/baseballimg.jpg'
import img from '../assets/Ground-img1.jpg'
import img3 from '../assets/ballimg2.jpg'
import { Modal } from 'react-bootstrap'
import CalenderSections from './Calender';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import { Carousel } from 'react-bootstrap'
const Rentcage = () => {
    const [show, setshow] = useState(false);
    const [response,setresponse]=useState([])


    useEffect(() => {
        AOS.init({ duration: 1700 })
    });

    const modal_active = () => {
        setshow(true)
    }
    const modal_deactive = () => {
        setshow(false)
    }
    const updateStatus = (event) => {
        // setresponse(event.target.name)
        // const response={response}
        
        // const removeduplicacy = response.filter((value, index) => {
        //             return response.indexOf(value) === index;
        //         });
    }
    // updateStatus = (event) => {

    //     this.setState(
    //         {

    //             response: [...this.state.response,event.target.name]
    //         }

    //     )
    //     var removeduplicacy = this.state.response.filter((value, index) => {
    //         return this.state.response.indexOf(value) === index;
    //     });
    //     this.setState(
    //         {

    //             check:removeduplicacy
    //         }
    //     )

    //     console.log(this.state)
    // }

    return (
        <>
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
                        <div className="col-md-4 text-center">
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

            <section className="my-5 py-3 table4">
                <div className="container px-3">
                    <div className="row pb-4">
                        <div className="col"><h1 className="text-white text-center h1">Book 35 Foot Single Cage</h1></div>
                    </div>
                    <div className="row d-flex justify-content-around align-items-center  mx-5">
                        <div className="col-md-4 text-center p-5 " id="whole-ground" data-aos="slide-right">
                            <div className="row" >
                                <div className="col-md-6  p-1">
                                    <img src={img} alt="/" className="img-fluid ground-img "

                                        onClick={updateStatus}
                                        name="Ground1 with machine"
                                    />
                                </div>
                                <div className="col-md-6 p-1">
                                    <img src={img} alt="/" className="img-fluid ground-img "
                                        onClick={updateStatus}
                                        name="Ground2 with machine"
                                    />
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-md-6 p-1 ">
                                    <img src={img} alt="/" className="img-fluid ground-img "
                                        onClick={updateStatus}
                                        name="Ground1 without machine"
                                    />
                                </div>
                                <div className="col-md-6 p-1 ">
                                    <img src={img} alt="/" className="img-fluid ground-img"
                                        onClick={updateStatus}
                                        name="Ground2 without machine"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 " >

                            <div className="card mx-3 mt-3">
                                <div className="card-header  text-center " id="samecolor">
                                    <h3>Your Ground Selection Preferences</h3>
                                </div>
                                <div className="card-body">

                                    <div className="text-white p-2 text-center   animate__animated animate__fadeIn" id="G-1">

                                    </div>

                                </div>
                                <div className="card-footer mb-3 text-center">
                                    <div>
                                        <button className="btn btn-xl text-white bg-danger  font-weight-bold" onClick={updateStatus} name="Unselected">Clear</button>
                                    </div>
                                    <div>
                                        <button className="btn btn-sm btn-success" onClick={modal_active}><h6 className="font-weight-bold">Schedule</h6></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* <pre>{JSON.stringify(this.state.check)}</pre> */}
            <Modal size="lg" show={show}  >
                <Modal.Header className=" text-white" id="samecolor" ><span className=".modal"><h2 >Get Book Your court</h2></span></Modal.Header>
                <Modal.Body className=".modal text-center" >
                    <CalenderSections />
                    <Link to='/add-cart' ><button className="btn btn-success mt-5" >Add to card</button></Link>
                    <button className="btn btn-danger mt-5" onClick={modal_deactive}>close</button>
                </Modal.Body>

            </Modal>
        </>
    )
}
export default Rentcage




