import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DashBoardcss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import { Chart, initTE } from "tw-elements";

initTE({ Chart });

const DashBoard = () => {
  // Sample data for the pie chart
  const pieChartData = {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
      datasets: [
        {
          data: [12, 19, 3, 5, 2],
          backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple'],
        },
      ],
    },
  };

  useEffect(() => {
    new Chart(document.getElementById('pie-chart'), pieChartData);
  }, []); // Ensure the chart is initialized only once when the component mounts

  return (
    <div className='dashuh'>
      <div className='dashboard-container'>
        <nav className="navbar">
          {/* Add navbar content here */}
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>Contact</li>
            <li>Customer Feedback</li>
            {/* Add more links or content as needed */}
          </ul>
        </nav>

        <aside className='sidebar'>
          <div className="sidebar-toggle">
            <FontAwesomeIcon icon={faBars} className='toggle-icon' />
          </div>
          <ul>
            <li>
              <Link to="/dash" className='disline'>Dashboard</Link>
            </li>
            <li>
              <Link to="/order" className='disline'>Order History</Link>
            </li>
            <li>
              <Link to="/productlist" className='disline'>Product Lists</Link>
            </li>
            <li>
              <Link to="/productlist" className='disline'>Admin Details</Link>
            </li>
          </ul>
        </aside>

        <div className="content">
          <header className="dashboard-header">
            <h1>Custom T-Shirt Printing Dashboard</h1>
          </header>
          <section className="metrics">
            {/* Add the pie chart here */}
            <div id="pie-chart"></div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoard;
