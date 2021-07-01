import React from 'react';
import AOS from 'aos';
import a from '../assets/a.png'
import b from '../assets/b.png'
import c from '../assets/c.png'
import d from '../assets/d.png'
import logo from '../assets/logo.png';

import { Carousel } from 'react-bootstrap'


class Home extends React.Component {
    componentDidMount() {
        AOS.init({ duration: 1700 })
    }
    render() {
        return (
            <>
                <section className="mt-0">
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={a}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={b}
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={c}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </section>

                {/* Section two start here about the dingger ground */}

                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 text-center p-3" style={{ backgroundColor: ' #40ad6d' }}><h1 id="Basball" data-aos="slide-right" >Baseball And Softball Camp Registration Is Now Open !</h1></div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container-fluid">
                        <div className="row p-lg-3"  >
                            <div className="col-md-6 p-lg-5 d-flex justify-content-center align-items-center p-4 text-center"><img src={logo} alt="/" width="400px" height="350px" id="logo" data-aos="fade-up" /></div>
                            <div className="col-md-6 p-lg-5 d-flex justify-content-center align-items-center p-4 text-center"><h1 id="batting" data-aos="fade-up">BATTING CAGES</h1></div>
                        </div>
                    </div>
                </section>

                <section className="section-three">
                    <div className="container">
                        <div className="row p-lg-3"  >
                            <div className="col-md-4 p-lg-5 d-flex justify-content-center  p-4 text-center border-1"><p className="paragraph" data-aos="zoom-in">OUR SUMMER CAMPS! LIMITED SPOTS AVAILABLE.</p></div>
                            <div className="col-md-4 p-lg-5 d-flex justify-content-center  p-4 text-center border-1"><p className="paragraph" data-aos="zoom-in">BASEBALL/SOFTBALL FACILITY BY THE HOUR! GREAT FOR INDIVIDUAL OR GROUP/TEAM TRAINING.</p></div>
                            <div className="col-md-4 p-lg-5 d-flex justify-content-center  p-4 text-center border-1"><p className="paragraph" data-aos="zoom-in">CATCHING LESSONS AVAILABLE.</p></div>
                        </div>
                    </div>
                </section>

                <div className="paralax d-flex justify-content-center align-items-center"><h1 style={{ color: "white", fontWeight: 'bold' }} data-aos="zoom-in">DINGERS TRAINING BASEBALL AND SOFTBALL TRAINING CENTER</h1></div>

                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 text-center p-3" style={{ backgroundColor: '#40ad6d' }}><h1 id="Basball" data-aos="slide-right" >We love our local baseball and softball players.</h1></div>
                        </div>
                    </div>
                </section>

                <div className="paralax-two d-flex justify-content-center align-items-center"><h1 style={{ color: "white", fontWeight: 'bold' }} data-aos="zoom-in">Located In Rockledge Florida</h1></div>

                <section>
                    <div className="container-fluid section-six">
                        <div className="row">
                            <div className="col-md-12 px-5  pt-5"><p className="question">WHAT IS <span className="text-white">DINGERS TRAINING CENTER?</span></p></div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 px-5 "><p className="questiontwo">Dingers Training Center is an indoor training center located in the heart of Rockledge Florida just 1 mile from the Highway I-95 exit. Dingers was designed with a strong vision of creating a better training facility for all baseball and softball players to feel comfortable while they work on developing their skills. We are a fully air conditioned facility with high level sports grade indoor turf, MLB grade cage netting, pitching machines, LED lighting, TV monitors for radar readings, high ceiling hitting areas, parent lounge with hot coffee and more! We offer cage rentals by the hours, facility rental, private instruction, camps and group clinics.



                                We all know that the Florida weather can be extremely hot or soaking wet from the crazy rainy days. This directly limits and effects the amount of quality training days our local baseball and softball players can have within any given year. That is no longer the case. Rainy Day? Come to Dingers! Too hot to train outside? Come to Dingers. Want to be a better player? Come to Dingers!



                                We welcome everybody! We know that there are baseball and softball players coming into Brevard County daily for tournaments. If your team needs to get some cuts in prior to playing, come to Dingers. We know that a lot of kids of various ages from all over Brevard want to get better. Come to Dingers. Whether you play club ball, rec ball, little league or high school ball. Come to Dingers! Looking for great summer camp, spring camp and winter camp options? Come to Dingers!

                            </p></div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default Home