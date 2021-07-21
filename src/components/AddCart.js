import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { withRouter } from 'react-router';

class Addcard extends React.Component {
    componentDidMount(props) {
        window.scrollTo(0, 0);
        // var checker = document.getElementById('exampleInputEmail1');
        // var sendbtn = document.getElementById('sendbutton');
        // checker.onchange = function () {
        //     sendbtn.disabled = !this.checked;
        // };
        const Arena = sessionStorage.getItem('Arena');
        const Amount = sessionStorage.getItem('Amount');
        const Day = sessionStorage.getItem('selectedDay');
        const time = sessionStorage.getItem('selectedSlot');
        const display_time= sessionStorage.getItem('display_time');
        const arena_no = sessionStorage.getItem('arena_no')
        this.setState(
            {
                arena: Arena,
                amount: Amount,
                date: Day,
                time: time,
                arena_no: arena_no,
                display_time:display_time
            }
        )

    }
    constructor(props) {
        super(props);


        this.state =
        {
            
            arena: "",
            amount: "",
            date: "",
            time: "",
            arena_no: "",
            display_time:""
        }
    }
    checked = () => {
        let button = document.getElementById('sendbutton');
        button.disabled = !this.checked
    }
    render() {
        return (
            <>

                <section className="py-5" id="addcartsection" >
                    <div className="container " data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="row px-5">
                            <div className="col-md-8 " id="addcard">
                                <h2 className="py-3 pl-4 font-weight-bold" >Booking Reservation
                                </h2>
                                <hr id="hrline1"></hr>
                                <div className="row">
                                    <div className="col mx-4">


                                        <div className="row ">
                                            <div className="col text-center ">
                                                <h2>Description</h2>
                                                <div className="row pt-4">
                                                    <div className="col">
                                                        <table className="table ">
                                                            <tbody>
                                                                <tr>
                                                                    <td> <h5>Type of Arena</h5></td>
                                                                    <td> <h5><i class="fa fa-arrow-circle-right  text-danger " aria-hidden="true"></i></h5></td>
                                                                    <td> {this.state.arena}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td> <h5>Date of Booking</h5></td>
                                                                    <td> <h5><i class="fa fa-arrow-circle-right text-danger " aria-hidden="true"></i></h5></td>
                                                                    <td> {this.state.date}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td> <h5>Timing of Booking</h5></td>
                                                                    <td> <h5><i class="fa fa-arrow-circle-right text-danger " aria-hidden="true"></i></h5></td>
                                                                    <td> {this.state.display_time}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr id="hrline1"></hr>




                                <div className="row ">
                                    <div className="col">
                                        <h5 className="p-4">
                                            <Link to="/"><i class="fa fa-arrow-left pr-3 text-danger" aria-hidden="true"></i> </Link>Back to schedule
                                        </h5>
                                    </div>
                                </div>
                            </div>


                            {/* summary */}

                            <div className="col-md-4 bg-light" >
                                <h3 className="text-center pt-4">Summary</h3>
                                <p className="px-3 mt-3">Thank you for chossing Dingers! Please double check you have selected the correct rental. Reminder
                                that all time slots are for 55 minutes. If you would like another to reserve another 55 minutes please repeat the process.
                                </p>
                                <hr id="hrline" ></hr>
                                <div className="row">
                                    <div className='col mx-3'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4>Total</h4>
                                            <h4>${this.state.amount}</h4>
                                        </div>
                                    </div>
                                </div>
                                <form>

                                    {/* <input type="checkbox" id="exampleInputEmail1" aria-describedby="emailHelp" className="ml-2 mt-3" onChange={this.checked} />
                                    <label for="exampleInputEmail1" class="form-label px-2">I have checked the Cages</label> */}
                                    <div className="text-center my-4">
                                        <Link to='/payment' className="text-dark"><button className="btn  font-weight-bold  text-center" id="sendbutton">Check out</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
export default Addcard;