import React from 'react';
import { Link } from 'react-router-dom';
import './Aboutcss.css';
import Footer from '../DashBoardPage/Footer';

const About = () => {
  return (
    <div className="aboutuh">
      <div className="about-us">

        <nav className="navbar11">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>Contact</li>
            <li>Customer Feedback</li>
          </ul>
        </nav>
    
        <aside className="sidebar11">
          <ul>
            <li>
              <Link to="/dash" className="disline">Dashboard</Link>
            </li>
            <li>
              <Link to="/order" className="disline">Order History</Link>
            </li>
            <li>
              <Link to="/productlist" className="disline">Product Lists</Link>
            </li>
            <li>
              <Link to="/productlist" className="disline">Admin Details</Link>
            </li>
          </ul>
        </aside>

        <main className="content22">
          <h2 className="content-header22">Welcome to the About us page</h2>
        </main>
        <div className='tryfoot'>

        <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
