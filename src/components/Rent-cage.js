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
import {  toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
toast.configure()

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
                Amount: "",
                selectedDay: null,
                selectedSlot: "Time",
                ArenaNo:"",
                modifiedDate:""
            }
        }

    }
    componentDidMount() {
        AOS.init({ duration: 1700 });
        window.scrollTo(0, 0);
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
                slots:[],
                Data:
                {
                    Arena: "",
                    Amount: "",
                    selectedDay: null,
                    selectedSlot:"",
                    modifiedDate:""
                }
            }
        )
    }

    preference= (event) => {
        
        this.setState(
            {
                ...this.state,
                show: true,
                Data:
                {
                    ...this.state.Data,
                    Arena: event.target.name,
                    Amount:parseInt(event.target.dataset.amount),
                    ArenaNo:parseInt(event.target.dataset.arena_const)
                }
            }
        );console.log(event.target.dataset.amount)
    }
    handleDayClick(day, { selected }) {
        
        let tarik=new Date().toISOString().slice(0,10)
        console.log(`this is ${tarik}`);
        console.log(day.toISOString())
        if(day.toISOString().slice(0,10) >= tarik)
        {
            
            console.log(day)
            // let Day = day;
            let Day = new Date(day.setDate(day.getDate()));
            console.log(Day)
            let Year = Day.getFullYear();
            let Month = Day.getMonth() + 1;
            let Date1 = Day.getDate() -1 ;
            let slotTime_demo = new Date(`${Year}-${Month}-${Date1}`);
            console.log(slotTime_demo.setDate(slotTime_demo.getDate() + 1))
            let slotTime = slotTime_demo.toISOString()

            this.setState({
                ...this.state,
                Data:
                {   ...this.state.Data,
                    selectedDay: day,
                    modifiedDate: slotTime.slice(0,10)
                }
            });
            console.log(slotTime.slice(0,10))
            this.getData(slotTime.slice(0,10))
    
        }
        else
        {
            this.setState
            (
                {
                    slots:[]
                }
            )
        }
    }
    timings = (event) => {
        console.log(event);
       document.getElementById("addcard_button").disabled=false;
       let non_selected_time = document.getElementsByClassName("btn  btn-success text-weight-bold")


       console.log(this.state.Data)

       let dheeraj = `${this.state.Data.modifiedDate.slice(0,10)} ${event.target.value}`;
        let ayush = new Date(`${dheeraj}`).toISOString("en-US", {timeZone: "UTC"})
    //    let prateek = new Date(`${aayush}`).toISOString;
    //    console.log(`${prateek} is is `)
    
       console.log(`${this.state.Data.modifiedDate.slice(0,10)} ${event.target.value}`)
       let booking_status_payload = {
           "booking_time": ayush     ,
           "arena":this.state.Data.ArenaNo,
           "name":"test",
           "email":"test@gtes.vom",
           "mobile_number":"0000000000",
           "amount":this.state.Data.Amount

       }

       let Data_check=`https://dingers-training.herokuapp.com/cage/booking-status`;
       Axios.post(Data_check,booking_status_payload).then((response)=>
       {
           console.log(response)
         
           console.log("completed the task")
       }).catch((error)=>
       {
        if(error.response.status == 400 ){
            this.notify('No Cage is available on this date.');
            document.getElementById("addcard_button").disabled=true;
         
        }
           console.error(error)
       })
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
    getData = (selected_date) => {
        let dataurl = `https://dingers-training.herokuapp.com/availabiliy/check?date=${selected_date}&arena=${this.state.Data.ArenaNo}`;
        Axios.get(dataurl).then((response) => {
            let Data = response.data.time
            console.log(Data);
            if (Data.length > 0){
            this.setState(
                {
                    ...this.state,
                    slots: Data,

                }
            )} else{
                
                this.notify('No Cage is available on this date.')
                this.setState(
                    {
                        ...this.state,
                        slots:[]
                    }
                )
            }
        }).catch((error) => {
            this.setState(
                {
                    ...this.state,
                    errormsg: error
                }
            )
        })
    }
    sessions=()=>
    {
        let storage=window.sessionStorage;
        let Dateselect=this.state.Data.modifiedDate
        let timeselect=this.state.Data.selectedSlot
        let adding=`${Dateselect} ${timeselect}`

        storage.setItem('Arena',this.state.Data.Arena);
        storage.setItem('Amount',this.state.Data.Amount);
        storage.setItem('selectedDay',this.state.Data.modifiedDate);
        storage.setItem('selectedSlot',this.state.Data.selectedSlot);
        storage.setItem('arena_no',this.state.Data.ArenaNo);
        storage.setItem('booking_time', new Date(adding).toISOString());

    }
     notify = (message)=>{ 
        
        toast.error(message)
        // default notification
        
           
    }
    
    render() 
    {
        return (
            <>
            
                    
                

                {/* Add to card starts here */}

                <section >
                    <div className="container">
                        <div
                            className="row p-lg-1 p-md-3 mt-lg-5 mt-md-5 text-white"
                            
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
                                        src={cage3}
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
                                                <h5>$ 32.00</h5>
                                            </h3>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <button id="sendbutton"  className="btn btn-sm  pt-2" onClick={this.preference} name="35 Foot Ground without Machine" data-amount="32" data-arena_const="2">Book</button>
                                        </div>
                                    </div>
                                    <hr id="hrline" className="mx-3 bg-success" />
                                    <div className="row p-4">
                                        <div className="col-md-6">
                                            <h4 className="Foot-cage">35 Foot Cage (with machine)</h4>
                                            <h5 className="Foot-cage-paragraph">
                                                Includes Ball, Pitching Screen and Tee.
                                            </h5>
                                        </div>
                                        <div className="col-md-3 text-center pt-2">
                                            <h3 className="Foot-cage-price">
                                                <h5>$ 46.00</h5>
                                            </h3>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <button id="sendbutton" className="btn btn-sm   pt-2" onClick={this.preference} name="35 Foot Ground with Machine" data-amount="46" data-arena_const="1">Book</button>
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
                                        src={cage2}
                                        alt="/"

                                    />
                                </div>
                                <div className="col-md-8 p-4">
                                    <div className="row p-4">
                                        <div className="col-md-6 ">
                                            <h4 className="Foot-cage">70 Foot Cage (without machine)</h4>
                                            <h5 className="Foot-cage-paragraph">
                                                Includes Ball, Pitching Screen and Tee.
                                            </h5>
                                        </div>
                                        <div className="col-md-3">
                                            <h3 className="Foot-cage-price text-center pt-2">
                                                <h5>$ 54.00</h5>
                                            </h3>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <button id="sendbutton" className="btn btn-sm  pt-2" onClick={this.preference} name="70 Foot Ground without Machine" data-amount="54" data-arena_const="4">Book</button>
                                        </div>
                                    </div>
                                    <hr id="hrline" className="mx-3 bg-success" />
                                    <div className="row p-4">
                                        <div className="col-md-6">
                                            <h4 className="Foot-cage">70 Foot Cage (with machine)</h4>
                                            <h5 className="Foot-cage-paragraph">
                                                Includes Ball, Pitching Screen and Tee.
                                            </h5>
                                        </div>
                                        <div className="col-md-3 text-center pt-2">
                                            <h3 className="Foot-cage-price">
                                                <h5>$ 66.00</h5>
                                            </h3>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <button id="sendbutton" className="btn btn-sm  pt-2" onClick={this.preference} name="70 Foot Ground with Machine" data-amount="66" data-arena_const="3">Book</button>
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
                                            <h4 className="Foot-cage">Full Facility (without machine)</h4>
                                            <h5 className="Foot-cage-paragraph">
                                                Includes Ball, Pitching Screen and Tee.
                                            </h5>
                                        </div>
                                        <div className="col-md-3">
                                            <h3 className="Foot-cage-price text-center pt-2">
                                                <h5>$ 110.00</h5>
                                            </h3>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <button id="sendbutton" className="btn btn-sm  pt-2" onClick={this.preference} name="Full Facility without Machine"  data-amount="110" data-arena_const="6">Book</button>
                                        </div>
                                    </div>
                                    <hr id="hrline" className="mx-3 bg-success" />
                                    <div className="row p-4">
                                        <div className="col-md-6">
                                            <h4 className="Foot-cage">Full Facility (with machine)</h4>
                                            <h5 className="Foot-cage-paragraph">
                                                Includes Ball, Pitching Screen and Tee.
                                            </h5>
                                        </div>
                                        <div className="col-md-3 text-center pt-2">
                                            <h3 className="Foot-cage-price">
                                                <h5>$ 130.00</h5>
                                            </h3>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <button id="sendbutton" className="btn btn-sm  pt-2" onClick={this.preference} name="Full Facility with Machine"  data-amount="130" data-arena_const="5">Book</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row p-lg-5 p-md-3">
                            <div className="col-md-12 text-center">
                                <p className="Contact_info">Call or email us to reserve your cage! 321-266-5325</p>
                                <p className="Contact_info1">dingerstraining321@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </section>





                <Modal size="lg" show={this.state.show}  >
                    <Modal.Header className=" text-white" id="samecolor" ><span className=".modal"><h2 >Book Your Cage</h2></span></Modal.Header>
                    <Modal.Body className=".modal text-center" >
                        <div className="card">

                            <div className="card-body mx-5">
                                <div className="row">
                                    <div className="col-md-6 d-flex justify-content-center">

                                        <DayPicker
                                            id="calender"
                                            selectedDays={this.state.Data.selectedDay}
                                            onDayClick={this.handleDayClick}
                                            disabledDays={[
                                                {
                                                    before: new Date(),
                                                },
                                            ]}
                                        />
                                    </div>
                                    <div className="col-md-6 text-center">

                                        <h3>Time slots</h3>
                                        <p>{this.state.Data.selectedSlot}</p>

                                        <div id="slot-timings">
                                            {
                                                 (this.state.slots !=undefined) ? 
                                                this.state.slots.map((list) => {
                                                    return (
                                                        <ul className="list-group">
                                                            <input type="text" className="btn  btn-success text-weight-bold" readOnly value={list} onClick={this.timings} id="listing" />
                                                        </ul>
                                                    )
                                                }):null
                                            
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn  mt-5" id="addcard_button" disabled><Link to='add-cart' onClick={this.sessions} id="addcard_button_link" className="font-weight-bold" >Add to card</Link></button>   
                        <button className="btn  mt-5" onClick={this.modal_deactive} id="close">close</button>

                    </Modal.Body>

                </Modal>
                

            </>
        )
    }

}


export default Rentcage




