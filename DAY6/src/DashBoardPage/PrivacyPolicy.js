
import React from 'react';
import './PrivacyPolicy.css';
import { Link } from 'react-router-dom';

const PrivacyPolicy=()=>{
  return (
    <div className="privacy-policy">
       <Link to="/home" className="back-link">
        <i className="fa fa-arrow-left"></i> Back
      </Link>
      <h1>Privacy Policy</h1>
        <div className="footera"></div>
        <div className="footerb"></div>
      <p>

Welcome to our Custom T-Shirt Printing website. At our custom tshirt printing company, we value and respect your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website and services.<br></br>

<h2>Information We Collect:</h2>

 <h4>Personal Information:</h4> When you visit our website, create an account, or place an order, we may collect personal information such as your name, email address, shipping address, billing information, and phone number.<br></br>

 <h4>Order Information:</h4>We collect information about the custom t-shirt orders you place on our website, including the designs, sizes, quantities, and any customization preferences you provide.<br></br>

<h4>Usage Data:</h4> We may collect information about how you interact with our website, including your IP address, browser type, pages visited, and referring pages.<br></br>

<h4>Cookies:</h4>We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings.<br></br>

<h2>How We Use Your Information:</h2>

<h4>We use the collected information for the following purposes:</h4>

 To process and fulfill your t-shirt orders.<br></br>

 To communicate with you regarding your orders, account, and promotions.<br></br>

 To personalize your experience on our website.<br></br>

 To improve our website and services.<br></br>

 To protect our website and users from fraud and unauthorized access.<br></br>

<h2>Data Security:</h2>

We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.<br></br>

 <h4>Disclosure of Your Information:</h4>

We may share your personal information with,

 service providers and partners who help us with website operations, payment processing, and order fulfillment.<br></br>

 Legal authorities if required by law or in response to a legal request.<br></br>

<h2>Your Choices:</h2>

<h4>You have the following choices regarding your personal information:</h4>

 You can update, correct, or delete your account information by logging into your account.<br></br>

 You can unsubscribe from marketing emails by following the instructions in the emails.<br></br>

<h2>Children's Privacy:</h2>

Our website is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us, and we will delete the information.<br></br>

 <h4>Changes to this Privacy Policy:</h4>

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated Privacy Policy on our website. Your continued use of our website after the changes indicate your acceptance of the updated Privacy Policy.<br></br>

<h2>Contact Us:</h2>

If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at 9994863368.<br></br>

      </p>

      {/* Add the rest of your privacy policy content here */}
    </div>
  );
}

export default PrivacyPolicy;
