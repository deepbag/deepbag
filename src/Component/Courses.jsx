import React from 'react';
import '../Styles/Courses.css';
import wp from '../Image/wp.png';
import Elementor from '../Image/Elementor.png';
import Malware from '../Image/Malware.png'; 

const Courses = () => {
  return (
        <>
            <div className='course_block'>
              <h3>⇀ Courses</h3>
              <hr/>

              <div className='course_single'>
                <div className='row'>
                  <div className='course_col_one'>
                    <img src={wp} alt='wordpress' />
                  </div>
                  <div className='course_col_two'>
                    <h3>Basic Complete WordPress for Beginners</h3>
                    <p>In this course you learn Basic things in WordPress. Everything Cover in this course like - Basic Understand, Themes & Plugins, Blog Website and How you can create a website.</p>
                    <h4>Actual Course Duration: <span>15 Days</span> <span>Live</span></h4>
                    <h4>Estimate Price: <span className='pricepoint'>₹2599</span> <span>₹999</span></h4>
                    <h4>Certificate Provided: <span>Yes</span></h4>
                    <h4>New Session Start From: <span>20 April 2022</span></h4>
                    <div className='courses_buttons'>
                      <a href='#' target="_blank" rel="noreferrer">Enroll Now</a>
                      <a href='https://wa.me/9893993028?text=Hey%2C%0AThank%20You%20for%20Contacting%20Me!%0AWrite%20What%20You%20Want%20To%20Know!%0ABasic%20Complete%20WordPress%20for%20Beginners!' target="_blank" rel="noreferrer">Any Inquiry</a>
                      <a href='https://linktr.ee/deepbag' target="_blank" rel="noreferrer">Connect</a>
                      <a href='https://deepbag.github.io/git-cloud-storage/basic-wordpress-course-brochure.pdf' target="_blank" rel="noreferrer">Download Brochure</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='course_single'>
                <div className='row'>
                  <div className='course_col_one'>
                    <img src={Elementor} alt='wordpress' />
                  </div>
                  <div className='course_col_two'>
                    <h3>Complete Elementor For Beginners</h3>
                    <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie.</p>
                    <h4>Actual Course Duration: <span>25 Days</span> <span>Live</span></h4>
                    <h4>Estimate Price: <span className='pricepoint'>₹4999</span> <span>Currently Not Avaliable</span></h4>
                    <h4>Certificate Provided: <span>Currently Not Avaliable</span></h4>
                    <h4>New Session Start From: <span>Currently Not Avaliable</span></h4>
                    <div className='courses_buttons'>
                      <a href='#' rel="noreferrer">Enroll Now</a>
                      <a href='#' rel="noreferrer">Any Inquiry</a>
                      <a href='https://linktr.ee/deepbag' target="_blank" rel="noreferrer">Connect</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='course_single'>
                <div className='row'>
                  <div className='course_col_one'>
                    <img src={Malware} alt='wordpress' />
                  </div>
                  <div className='course_col_two'>
                    <h3>WP Malware Removing For Beginners</h3>
                    <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie.</p>
                    <h4>Actual Course Duration: <span>10 Days</span> <span>Live</span></h4>
                    <h4>Estimate Price: <span className='pricepoint'>₹6599</span> <span>Currently Not Avaliable</span></h4>
                    <h4>Certificate Provided: <span>Currently Not Avaliable</span></h4>
                    <h4>New Session Start From: <span>Currently Not Avaliable</span></h4>
                    <div className='courses_buttons'>
                      <a href='#' rel="noreferrer">Enroll Now</a>
                      <a href='#' rel="noreferrer">Any Inquiry</a>
                      <a href='https://linktr.ee/deepbag' target="_blank" rel="noreferrer">Connect</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        </>
  )
}

export default Courses