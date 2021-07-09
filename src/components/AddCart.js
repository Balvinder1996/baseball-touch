import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { withRouter } from 'react-router';

class Addcard extends React.Component {
    componentDidMount(event) {
        window.scrollTo(0, 0)

        // this.setState(
        //     {
        //         // Arena:this.props.location.state.cardData.Arena,
        //         // Amount:this.props.location.state.cardData.Amount,
        //         // // selectedDay:this.props.location.transfer.cardData.selectedDay,
        //         // // selectedSlot:this.props.location.transfer.cardData.selectedSlot,

        //     }
        // )
        // console.log(this.props.location.state)

    }
    constructor(props) {
        super(props);
        // let date_obj=(this.props.location.state.cardData.selectedDay)

        this.state =
        {

            arena: this.props.location.transfering.cardData.Arena,
            amount: this.props.location.transfering.cardData.Amount,
            date: this.props.location.transfering.cardData.selectedDay,
            time: this.props.location.transfering.cardData.selectedSlot
        }
        // console.log(date_obj)
    }
    checked=()=>
    {
        let button=document.getElementById('sendbutton');
        button.disabled=!this.checked
    }
    render() {
        return (
            <>

                <section className="py-5" id="addcartsection" >
                    <div className="container " data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="row px-5">
                            <div className="col-md-8 text-white" id="addcard">
                                <h2 className="py-3 pl-4 font-weight-bold" >Booking Cart<i class="fa fa-shopping-cart animate__animated animate__backInRight animate__slow" aria-hidden="true"></i>
                                </h2>
                                <hr id="hrline1"></hr>
                                <div className="row">
                                    <div className="col mx-4">


                                        <div className="row ">
                                            <div className="col text-center text-white">
                                                <h2>Description</h2>
                                                <div className="row pt-4">
                                                    <div className="col">
                                                        <table className="table text-white">
                                                            <tbody>
                                                                <tr>
                                                                    <td> <h5>Type of Arena</h5></td>
                                                                    <td> <h5><i class="fa fa-arrow-circle-right text-light" aria-hidden="true"></i></h5></td>
                                                                    <td> {this.state.arena}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td> <h5>Date of Booking</h5></td>
                                                                    <td> <h5><i class="fa fa-arrow-circle-right text-light" aria-hidden="true"></i></h5></td>
                                                                    <td> {this.state.date.toLocaleDateString()}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td> <h5>Timing of Booking</h5></td>
                                                                    <td> <h5><i class="fa fa-arrow-circle-right text-light" aria-hidden="true"></i></h5></td>
                                                                    <td> {this.state.time}</td>
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
                                            <Link to="/rentcage"><i class="fa fa-arrow-left pr-3 text-danger" aria-hidden="true"></i> </Link>Back to schedule
                                        </h5>
                                    </div>
                                </div>
                            </div>


                            {/* summary */}

                            <div className="col-md-4 bg-light" >
                                <h3 className="text-center pt-4">Summary</h3>
                                <hr id="hrline"></hr>
                                <div className="row py-2">
                                    <div className='col mx-3'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5>35 Foot cage</h5>
                                            <h5>Price</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="row  py-3">
                                    <div className='col mx-3'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5>35 Foot cage</h5>
                                            <h5>Price</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="row  py-2">
                                    <div className='col mx-3'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5>35 Foot cage</h5>
                                            <h5>Price</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="row  py-3">
                                    <div className='col mx-3'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5>35 Foot cage</h5>
                                            <h5>Price</h5>
                                        </div>
                                    </div>
                                </div>
                                <hr id="hrline" ></hr>
                                <div className="row">
                                    <div className='col mx-3'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4>Total</h4>
                                            <h4>Price</h4>
                                        </div>
                                    </div>
                                </div>
                                <form>

                                    <input type="checkbox" id="exampleInputEmail1" aria-describedby="emailHelp" className="ml-2 mt-3" onChange={this.checked} />
                                    <label for="exampleInputEmail1" class="form-label px-2">I have checked the Cages</label>
                                    <div className="text-center my-4">
                                        <Link to='/payment' id="sendbutton"><button className="btn btn-success text-center"  id="sendbutton">Check out</button></Link>
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