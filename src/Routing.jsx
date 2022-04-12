import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // react router dom library path
import './Styles/Routing.css'; // Routing css path
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap library path

import Navbar from './Global/Navbar'; // components
import Aboutme from './Component/Aboutme'; // components
import Notfound from './Component/Notfound'; // components
import Testimonials from './Component/Testimonials'; // components
// import Products from './Component/Products'; 
import Overview from './Component/Overview'; // components
import Courses from './Component/Courses'; // components

export default function Routing() {

  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row">
            {/* Navbar start */}
            <div className="col-md-2 colbar">
              <Navbar />
            </div>
            {/* Navbar end */}

            <div className="col-md-10 coldata">
              <Routes>
                <Route path='/' exact element={<Overview />} />
                <Route path="/about" exact element={<Aboutme />} />
                <Route path="/courses" exact element={<Courses />} />
                <Route path="/testimonials" exact element={<Testimonials />} />
                {/* <Route path="/products" exact element={<Products />} /> */}
                <Route exact element={<Notfound />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

