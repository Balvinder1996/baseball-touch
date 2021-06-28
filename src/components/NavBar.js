import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/Logoimg.webp'
class NavBar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark sticky-top" id="navigation_bar" >
                    <div className="container-fluid">

                        <Link to='/' className="navbar-brand ml-2"><img src={img} height="30px" width="130px" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon animate__animated animate__bounce"></span>
                        </button>

                        <div className="collapse navbar-collapse animate__animated animate__flipInX" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item pl-3">
                                    <Link className="nav-link active" to='/'>Home</Link>
                                </li>
                                <li className="nav-item   pl-3">
                                    <Link className="nav-link " aria-current="page" to='/rentcage'>Rent A Cage</Link>
                                </li>
                                <li className="nav-item  pl-3">
                                    <Link className="nav-link " aria-current="page" to='/ourservices'>Camp-Registration  </Link>
                                </li>
                                <li className="nav-item   pl-3">
                                    <Link className="nav-link" aria-current="page" to='/aboutus'>Book Now</Link>
                                </li>
                                <li className="nav-item   pl-3">
                                    <Link className="nav-link " aria-current="page" to='/contact-us'>Our Facility</Link>
                                </li>
                                <li className="nav-item  pl-3">
                                    <Link className="nav-link " aria-current="page" to='/contact-us'>Birthday Party Package</Link>
                                </li>
                                <li className="nav-item  pl-3">
                                    <Link className="nav-link " aria-current="page" to='/contact-us'>Medical Waiver</Link>
                                </li>
                                <li className="nav-item   pl-3">
                                    <Link className="nav-link " aria-current="page" to='/contact-us'>Contact Us</Link>
                                </li>
                            </ul>

                            <div className="ml-auto">
                                <span><Link to='/add-cart' className="text-white h5 pl-3 ml-1 "><i className="fa fa-shopping-cart"></i> <i class="fa fa-user px-3" aria-hidden="true"></i>
                                </Link></span>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
export default NavBar