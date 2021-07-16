import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/Logoimg.webp'
import menu from '../assets/menu.png';
class NavBar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark sticky-top px" id="navigation_bar" >
                    <div className="container-fluid">

                        <Link to='/' className="navbar-brand ml-2"><img src={img} height="30px" width="130px" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon animate__animated animate__bounce "><img src="https://image.flaticon.com/icons/png/128/151/151867.png" style={{width:'30px', height:'30px'}}/></span>
                        </button>

                        <div className="collapse navbar-collapse animate__animated animate__fadeInLeftBig" id="navbarSupportedContent">
                            <ul className="navbar-nav offset-lg-7 ">
                                
                                <li className="nav-item   pl-3">
                                    <Link className="nav-link " aria-current="page" to='/'>Rent A Cage</Link>
                                </li>
                                <li className="nav-item  pl-3">
                                    <Link className="nav-link  disabled" aria-current="page" to='/ourservices' hidden>Camp-Registration  </Link>
                                </li>
                                <li className="nav-item   pl-3">
                                    <a className="nav-link" aria-current="page" href="https://www.facebook.com/dingerstraining/" target="_blank" ><svg viewBox="0 0 24 24" fill="currentColor" width="30px" height="30px" data-ux="IconSocial" marginhorizontal="0" class="x-el x-el-svg c1-1 c1-2 c1-20 c1-26 c1-47 c1-28 c1-29 c1-2a c1-2b c1-b c1-c c1-d c1-e c1-f c1-g"><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12z" fill="#1877F2"></path><path d="M15.114 14.313L15.47 12h-2.22v-1.5c0-.633.31-1.25 1.304-1.25h1.008V7.281s-.915-.156-1.79-.156c-1.828 0-3.022 1.107-3.022 3.113V12H8.719v2.313h2.031v5.59c.828.13 1.672.13 2.5 0v-5.59h1.864z" fill="#fff"></path></g></svg></a>
                                </li>
                                <li className="nav-item   pl-3">
                                    <a className="nav-link" aria-current="page" href='https://twitter.com/Dingers321' target="_blank"><svg viewBox="0 0 24 24" fill="currentColor" width="30px" height="30px" data-ux="IconSocial" marginhorizontal="0" class="x-el x-el-svg c1-1 c1-2 c1-20 c1-26 c1-47 c1-28 c1-29 c1-2a c1-2b c1-b c1-c c1-d c1-e c1-f c1-g"><g fill="#1DA1F2"><path fill-rule="evenodd" d="M9.026 19.01c6.038 0 9.341-5.007 9.341-9.341 0-.141 0-.282-.006-.423A6.689 6.689 0 0020 7.543a6.654 6.654 0 01-1.889.519 3.303 3.303 0 001.447-1.819 6.53 6.53 0 01-2.087.794A3.277 3.277 0 0015.076 6a3.287 3.287 0 00-3.284 3.285c0 .256.032.505.083.749a9.323 9.323 0 01-6.767-3.432 3.292 3.292 0 001.018 4.386 3.32 3.32 0 01-1.486-.41v.045a3.29 3.29 0 002.632 3.22 3.198 3.198 0 01-.865.115c-.21 0-.416-.019-.614-.057a3.283 3.283 0 003.067 2.28 6.585 6.585 0 01-4.079 1.408A6.32 6.32 0 014 17.544a9.339 9.339 0 005.026 1.466z"></path></g></svg></a>
                                </li>
                                <li className="nav-item  pl-3">
                                    <a className="nav-link" aria-current="page" href='https://www.instagram.com/dingerstrainingcenter/' target="_blank"><svg viewBox="0 0 24 24" fill="currentColor" width="30px" height="30px" data-ux="IconSocial" marginhorizontal="0" class="x-el x-el-svg c1-1 c1-2 c1-20 c1-26 c1-47 c1-28 c1-29 c1-2a c1-2b c1-b c1-c c1-d c1-e c1-f c1-g"><g fill="#E1306C"><path d="M14.667 12a2.57 2.57 0 0 0-.782-1.885A2.57 2.57 0 0 0 12 9.333a2.57 2.57 0 0 0-1.885.782A2.57 2.57 0 0 0 9.333 12c0 .736.26 1.365.782 1.885.52.521 1.149.782 1.885.782a2.57 2.57 0 0 0 1.885-.782c.521-.52.782-1.149.782-1.885zm1.437 0c0 1.139-.4 2.108-1.198 2.906-.798.799-1.767 1.198-2.906 1.198-1.139 0-2.108-.4-2.906-1.198-.799-.798-1.198-1.767-1.198-2.906 0-1.139.4-2.108 1.198-2.906.798-.799 1.767-1.198 2.906-1.198 1.139 0 2.108.4 2.906 1.198.799.798 1.198 1.767 1.198 2.906zm1.125-4.27c0 .263-.094.489-.281.676a.923.923 0 0 1-.677.282.923.923 0 0 1-.677-.282.923.923 0 0 1-.281-.677c0-.264.093-.49.28-.677a.923.923 0 0 1 .678-.281c.264 0 .49.094.677.281a.923.923 0 0 1 .281.677zM12 5.437l-.797-.006a56.514 56.514 0 0 0-1.099 0c-.25.004-.585.014-1.005.032-.42.017-.778.052-1.073.104a4.177 4.177 0 0 0-.745.192c-.347.14-.653.34-.916.605-.264.263-.466.569-.605.916-.076.202-.14.45-.192.745a8.255 8.255 0 0 0-.104 1.073c-.018.42-.028.755-.032 1.005-.003.25-.003.616 0 1.1l.006.796-.006.797c-.003.483-.003.849 0 1.099.004.25.014.585.032 1.005.017.42.052.778.104 1.073.052.295.116.543.192.745.14.347.34.653.605.916.263.264.569.466.916.605.202.076.45.14.745.192.295.052.653.087 1.073.104.42.018.755.028 1.005.032.25.003.616.003 1.1 0l.796-.005.797.005c.483.003.849.003 1.099 0 .25-.004.585-.014 1.005-.032.42-.017.778-.052 1.073-.104.295-.052.543-.116.745-.192.347-.14.653-.34.916-.605.264-.263.466-.569.605-.916.076-.202.14-.45.192-.745.052-.295.087-.653.104-1.073.018-.42.028-.755.032-1.005.003-.25.003-.616 0-1.1L18.562 12l.006-.797c.003-.483.003-.849 0-1.099a38.59 38.59 0 0 0-.032-1.005 8.255 8.255 0 0 0-.104-1.073 4.177 4.177 0 0 0-.192-.745 2.703 2.703 0 0 0-.605-.916 2.703 2.703 0 0 0-.916-.605 4.177 4.177 0 0 0-.745-.192 8.255 8.255 0 0 0-1.073-.104c-.42-.018-.755-.028-1.005-.032-.25-.003-.616-.003-1.1 0L12 5.438zM20 12c0 1.59-.017 2.691-.052 3.302-.07 1.445-.5 2.563-1.292 3.354-.791.792-1.91 1.222-3.354 1.292-.611.035-1.712.052-3.302.052s-2.691-.017-3.302-.052c-1.445-.07-2.563-.5-3.354-1.292-.792-.791-1.222-1.91-1.292-3.354C4.017 14.691 4 13.59 4 12s.017-2.691.052-3.302c.07-1.445.5-2.563 1.292-3.354.791-.792 1.91-1.222 3.354-1.292C9.309 4.017 10.41 4 12 4s2.691.017 3.302.052c1.445.07 2.563.5 3.354 1.292.792.791 1.222 1.91 1.292 3.354.035.611.052 1.712.052 3.302z"></path></g></svg></a>
                                </li>
                                <li className="nav-item  pl-3">
                                    <Link className="nav-link disabled" aria-current="page" to='/contact-us' hidden>Medical Waiver</Link>
                                </li>
                                <li className="nav-item   pl-3">
                                    <Link className="nav-link disabled" aria-current="page" to='/contact-us' hidden>Contact Us</Link>
                                </li>
                            </ul>

                            <div className="ml-auto">
                                <span><Link to='/add-cart' className="text-white h5 pl-3 ml-1 disabled " hidden><i className="fa fa-shopping-cart"></i> <i class="fa fa-user px-3" aria-hidden="true"></i>
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