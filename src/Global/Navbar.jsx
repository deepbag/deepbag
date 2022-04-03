import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap library Path
import '../Styles/Navbar.css'; // Navbar css path
import { NavLink } from 'react-router-dom'; // React Router Dom react library
import deeplogo from '../Image/logo.svg';

export default function Navbar() {
    return (
        <>  
            <div className='deeplogo'>
                <img src={deeplogo} alt='deepbag logo' width='200px' />
            </div>
            

            {/* Navbar Menu start */}
            <div className="navblock">
                <NavLink to="/" className="navLink">Overview →</NavLink>
                <NavLink to="/about" className="navLink">About Me →</NavLink>
                <NavLink to="/courses" className="navLink">Courses →</NavLink>
                <NavLink to="/products" className="navLink">Products →</NavLink>
                {/* <NavLink to="/blog" className="navLink">Blogs →</NavLink> */}
                <NavLink to="/testimonials" className="navLink">Testimonials →</NavLink>
                <NavLink to="/contact" className="navLink navContact">Contact Us →</NavLink>
            </div>
            {/* Navbar Menu end */}

            {/* Navbar Social Platform start */}
            <div className="socialblock">
                <a href="https://twitter.com/erdeepbag" target="_blank" rel="noreferrer"><p><i className="fa fa-twitter"/></p></a>
                <a href="https://www.linkedin.com/in/deep-bag-360764170/" target="_blank" rel="noreferrer"><p><i className="fa fa-linkedin"/></p></a>
                <a href="https://github.com/deepbag" target="_blank" rel="noreferrer"><p><i className="fa fa-github"/></p></a>
            </div>
            {/* Navbar Social Platform end */}
        </>
    )
}

 