import React from 'react';
import { Link } from 'react-router-dom'

class Addcard extends React.Component {
    componentDidMount(props) {
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
    constructor(props)
    {
        super(props);
        // let date_obj=(this.props.location.state.cardData.selectedDay)
        
        this.state=
        {
            arena:this.props.location.transfering.cardData.Arena,
            amount:this.props.location.transfering.cardData.Amount,
            date:this.props.location.transfering.cardData.selectedDay,
           time:this.props.location.transfering.cardData.selectedSlot
        }
// console.log(date_obj)
    }
    render() {
        return (
            <>
            
                <section className="py-5" id="addcartsection" >
                    <div className="container" id="addcard" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="py-3 pl-4 font-weight-bold" style={{ color: "#40ad6d" }}>Shopping Cart <i class="fa fa-shopping-cart animate__animated animate__backInRight animate__slow" aria-hidden="true"></i>
                                </h2>
                                <hr id="hrline"></hr>
                                <div className="row">
                                    <div className="col mx-4">
                                        <div className="d-flex justify-content-between align-items-center ">
                                            <div>
                                                <h4 className="mr-4">
                                                   {this.state.arena}
                                                </h4>
                                                <p>{this.state.amount}</p>
                                                <p>{this.state.date.toLocaleDateString()}</p>
                                            </div>
                                            <div>
                                                {/* <h4 className="font-weight-bold">{this.state.selectedSlot}</h4> */}
                                                {/* <p>{this.state}</p> */}
                                            </div>
                                            <div>
                                                <h3><i className="fa fa-times text-danger " aria-hidden="true"></i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr id="hrline"></hr>
                                
                                   
                                
                               
                                <div className="row ">
                                    <div className="col">
                                        <h5 className="p-4">
                                            <Link to="/rentcage"><i class="fa fa-arrow-left pr-3 text-danger" aria-hidden="true"></i> </Link>Back to schedule
                                        </h5>
                                    </div>
                                </div>
                            </div>


                            {/* summary */}

                            <div className="col-md-4" id="summary">
                                <h3 className="text-center pt-4">Summary</h3>
                                <hr id="hrline1"></hr>
                                <div className="row py-3">
                                    <div className='col mx-3'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4>35 Foot cage</h4>
                                            <h4>Price</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="row  py-3">
                                    <div className='col mx-3'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4>35 Foot cage</h4>
                                            <h4>Price</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="row  py-3">
                                    <div className='col mx-3'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4>35 Foot cage</h4>
                                            <h4>Price</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="row  py-3">
                                    <div className='col mx-3'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4>35 Foot cage</h4>
                                            <h4>Price</h4>
                                        </div>
                                    </div>
                                </div>
                                <hr id="hrline1"></hr>
                                <div className="row  py-4">
                                    <div className='col mx-3'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4>Total</h4>
                                            <h4>Price</h4>
                                        </div>
                                    </div>
                                </div>
                                <form>

                                    <input type="checkbox" id="exampleInputEmail1" aria-describedby="emailHelp" className="ml-2" />
                                    <label for="exampleInputEmail1" class="form-label px-2">I have checked the Cages</label>
                                    <div className="text-center mt-4">
                                        <Link to='/payment'><button className="btn btn-success text-center">Check out</button></Link>
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