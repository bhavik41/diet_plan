// import React from 'react'
// import { useNavigate } from 'react-router-dom'; // For navigation
// import { Link, useLocation } from "react-router-dom";
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';

// const Navbar = () => {

//     const navigate = useNavigate()
//     const location = useLocation();

//             const logOut = () => {
//         googleLogout();
//         navigate("/signin")
//     };
//     return (
//         <section className="navbarsection">
//             <nav className="navbar flex sticky-top navbar-dark bg-dark" style={{ borderBottom: '1px solid white' }}>
//                 <div className="container-fluid">
//                     <a className="navbar-brand px-3" href="#">Freshers Booth</a>
//                 </div>
//                 {location.pathname !== '/signin' && location.pathname !== '/signup' && (
//                     <button onClick={logOut} className='bg-dark text-light'>Log out</button>
//                 )}
//             </nav>
//         </section>
//     )
// }

// export default Navbar

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JavaScript (optional for interactive features)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.scss'; // Import your SCSS after Bootstrap
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'



const Navbar = () => {
    const [active, setActive] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    const toggleNav = () => {
        setActive(!active);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const logOut = () => {
        localStorage.removeItem('token');
        setTimeout(() => navigate('/signin'), 1000);
    };

    return (
        <section className="navbarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <Link to="/" className="logo flex">
                        <h1>MyNutrients.</h1>
                    </Link>
                </div>

                <nav className={`navBar ${active ? 'activeSidebar' : ''}`}>
                    <div onClick={toggleNav} className="toggleNavbar">
                        <AiFillCloseCircle className="icon" />
                    </div>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <Link to="/home" className="navLink">Home</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/Nutrition" className="navLink">FoodDB</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/about-us" className="navLink">About Us</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/contact-us" className="navLink">Contact</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Terms & Conditions</a></li>
                                <li><a className="dropdown-item" href="#">Privacy Poilicy </a></li>
                                <li><a className="dropdown-item" href="#">Refund Policy</a></li>
                            </ul>
                        </li>
                        <button className="btn btn-dark">
                            <Link to="/logOut" className="">log out</Link>
                        </button>
                    </ul>
                </nav>

                <div onClick={toggleNav} className="toggleNavbar">
                    {active ? <AiFillCloseCircle className="icon" /> : <TbGridDots className="icon" />}
                </div>
            </header>
        </section>
    );
};

export default Navbar;
