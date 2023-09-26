import React from 'react';
import './Homecss.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/UserSlice';
import Footer from '../DashBoardPage/Footer';
import './TshirtAnimation.css'; // Import the animation styles

const Homepage = () => {
  const user = useSelector(selectUser);
  const email = user ? user.username : 'Guest'; // Check if 'user' is not null

  return (
    <div className="homepage">
      <div className="tshirt-animation"></div> {/* Add the t-shirt animation */}
      <nav className="navbar1">
        {/* Add navbar content here */}
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>Contact</li>
          <li>Customer Feedback</li>
          {/* Add more links or content as needed */}
        </ul>
      </nav>
      <aside className='sidebar1'>
        <div className="sidebar1-toggle">
          <FontAwesomeIcon icon={faBars} className='toggle-icon ' />
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
      <main className="content1">
        <h2 className="content-header1">Welcome, {email}</h2>
        <h1>
        <Link to="/productlist"> {/* Link to the Product List page */}
          <button className="view-products-button">View Products</button>
        </Link>
          <FontAwesomeIcon icon={Homepage} />
        </h1>
        <div className="image-container">
          <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/276249531/original/cf0d17999d9ed5f22ceecbc0d90020dd30d45d0d/do-awesome-custom-typography-t-shirt-design-bundle.jpg" alt="" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
