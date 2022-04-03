import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap library Path
import '../Styles/Contact.css'; // contact css path
import googlemap from '../Image/googlemap.png';
import emailjs from '@emailjs/browser'; // emailjs library path
import ReCAPTCHA from "react-google-recaptcha"; // google captcha library path

export default function Contact() {
  
  // google captcha data store start
  const recaptchaRef = React.createRef();
  const [ token, setToken ] = useState("");

  function onChange(value){
    setToken(value);
  }
  // google captcha data store end

  // email sending emailjs config start
  function sendEmail(e) {
    if(!token){
      alert("Please Verify Captcha👍")
    } else{
      e.preventDefault();
      emailjs.sendForm('devresume_io', 'devresume__io', e.target, 'user_1pYJbgmcOFe76t34Lkx7R')
        .then(() => {
            alert("You Have Successfully Contact With Us Wait for Reply 👍");
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset();
    }
  }
  // email sending emailjs config start

    return (
        <div className="contactblock">
            <h3>⇀ Contact Us</h3> 
            <hr/>

            {/* Author Infromation start */}
            <div className="row">
              <div className="col-md-3">
                <div className="contactusblock">
                  <p><i className="fa fa-phone"/></p>
                  <a href="tel:8770179884"><h4>+91-9893993028</h4></a>
                </div>
              </div>

              <div className="col-md-3">
                <div className="contactusblock">
                  <p><i className="fa fa-street-view"/></p>
                  <h4>Korba, Chhattisgarh</h4>
                </div>
              </div>

              <div className="col-md-3">
                <div className="contactusblock">
                  <p><i className="fa fa-envelope"/></p>
                  <a href="mailto:deepbag92@gmail.com"><h4>deepbag92@gmail.com</h4></a>
                </div>
              </div>

              <div className="col-md-3">
                <div className="contactusblock">
                  <p><i className="fa fa-at"/></p>
                  <a href="https://www.freelancer.com/u/DeepBag" target="_blank" rel="noreferrer"><h4>Freelance Available</h4></a>
                </div>
              </div>
            </div>
            {/* Author Infromation end */}

            {/* Contact form with map start */}
            <div className="formdata">
              <h4>⇀ How Can I Help You</h4>
              <div className="row">
                <div className="col-md-7">
                  <form className="helpblock" onSubmit={sendEmail}>
                    <input type="text" placeholder="Full Name" className="nameinput" name="name" required/>
                    <input type="email" placeholder="Email Address" className="emailinput" name="email" required/>
                    <input type="phone" placeholder="Phone Number" className="phoneinput" name="number" required/>
                    <input type="text" placeholder="Subject" className="subjectinput" name="subject" required/>
                    <textarea type="text" placeholder="Message" className="messageinput" name="message" required/>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6Lf1MvsaAAAAAM5cOcPyONX-hYUhz_AOf4bcSasO"
                      onChange={onChange}
                      className="captchav2"
                    />
                    <button className="button">Submit</button>
                  </form>
                </div>

                <div className="col-md-5">
                  <div className="mapblock">
                    <a href="https://www.google.co.in/maps/place/Software+Services/@22.4113978,82.7028931,15z/data=!4m5!3m4!1s0x0:0x7cd98430575044ba!8m2!3d22.4114791!4d82.7043909" target="_blank" rel="noreferrer">
                      <img src={googlemap} alt="googlemap" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact form with map end */}
        </div>
    )
}

