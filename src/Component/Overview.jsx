import React from 'react';
import overviewprofile from '../Image/overview-profile.png'; // Author Image 
import '../Styles/Overview.css';
import { NavLink } from 'react-router-dom'; // React Router Dom react library

const Overview = () => {

  // Download CV from google drive function start
  const downloadCV = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  // Download CV from google drive function start

  return (
        <>
          {/* Overview Block Image with name with about start */}
          <div className="over_block">
            <div className="over_imgblock">
                <img src={overviewprofile} alt="deepbag" />
            </div>
            <div className="over_infoblock">
                <h3>Hi, there! I'm Deep Bag</h3>
                <p>Hey, You looks Good! I'm a diffrent & decent guy. Everytime I'm working for freedom. I work as a part time jobs such as WordPress Developer. But in React I work for my own things. I love Photography maybe I love everything which is adventures.</p>
                <p><button onClick={() => downloadCV('https://deepbag.github.io/storage/deepbagcv.pdf')}>Download CV</button></p>
            </div>
          </div>
          {/* Overview Block Image with name with aboutend */}

          <div className='over_thought'>
            <p>"Before starting anything, sit comfortably and talk to yourself!"</p>
          </div>

          <div className='over_secure'>
            <h3>We are offering you to Insurance Your <span>Web Technology</span> Services!</h3>
            <p>We are offering you to secure or Insurance your website to protect from malware or other small problems. We have a premium solution for you. We stand in your every minimal problems.</p>
            <h4>Benefits We Provide!</h4>
            <ol>
              <li>Complete security to your website!</li>
              <li>We can maintain your website as subscription!</li>
              <li>Any problem we can solve!</li>
              <li>24*7 hours support!</li>
            </ol>
            {/* <button><NavLink to="/courses" className='OverLink'>Subscription →</NavLink></button> */}
            <a href="https://deepbag.mojo.page/web-technology-insurance-services" target="_blank" rel="noreferrer">Subscription →</a>
          </div>

          <div className='over_wpcourse'>
            <h3>I'm offering you to learn <span>WordPress Development</span> Course!</h3>
            <p>In this course I'm offering you to learn complete WordPress Development. I'm dividing development into diffrent courses. You can choose courses as your requirements.</p>
            <h4>Benefits I Provide!</h4>
            <ol>
              <li>Live classes or support or lifetime access!</li>
              <li>Guidence to every steps every problem!</li>
              <li>If you have any problem we can talk!</li>
              <li>12*7 hours support!</li>
            </ol>
            <button><NavLink to="/courses" className='OverLink'>Courses →</NavLink></button>
          </div>

          <div className='over_work'>
            <h3>You need Developer Let's <span>Work together</span> in a Project!</h3>
            <p>Got a business but no website yet? I got you. Have a website but want to take it to the next level? I got you. You’re a web guy/gal yourself and want to collaborate together? I got you. Just want to chat? I still got you.</p>
            <h4>Benefits I Provide!</h4>
            <ol>
              <li>99.99% Work completed guarantee!</li>
              <li>Great support like any small changes after deliverd!</li>
              <li>Best solution provided!</li>
              <li>12*7 hours support!</li>
            </ol>
            {/* <button><NavLink to="/contact" className='OverLink'>Collaborate | Say Hello! →</NavLink></button> */}
            <a href="https://api.whatsapp.com/send?phone=918770179884&text=Hey%2C%20I%20Have%20a%20Query!" target="_blank" rel="noreferrer">Collaborate | Say Hello! →</a>
          </div>

          {/* <div className='over_products'>
            <h3>I'm offering you to buy <span>Good Products</span> from Online!</h3>
            <p>I used a lot products once check every product in my catogoris if you like any product you can buy it. It's affordable, durable, good quality and worth product.</p>
            <button><NavLink to="/products" className='OverLink'>Products →</NavLink></button>
          </div> */}

          <div className='over_copyright'>
            <h3>Love to know you've visited</h3>
            <p>Copyright © 2021 Deep Bag All Rights Reserved</p>
          </div>

        </>
  )
}

export default Overview;