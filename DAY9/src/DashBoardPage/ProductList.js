// ProductList.js
import React from 'react';
import './ProductListcss.css'; // Add your CSS file here
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Product 1',
    price: '₹250',
    features: 'Feature 1, Feature 2, Feature 3',
    imageSrc: 'https://m.media-amazon.com/images/I/61Mjjd0YpuL._SX569_.jpg',
  },
  {
    name: 'Product 2',
    price: '₹220',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://m.media-amazon.com/images/I/71VS+bOFyhL._SX569_.jpg',
  },
  {
    name: 'Product 3',
    price: '₹180',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://4.imimg.com/data4/KY/GY/MY-19088528/ladies-tie-dye-t-shirt-500x500.jpg',
  },
  {
    name: 'Product 4',
    price: '₹300',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://m.media-amazon.com/images/I/515unw4s8SL._AC_UY1100_.jpg',
  },{
    name: 'Product 5',
    price: '₹250',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://i.pinimg.com/1200x/0f/a7/80/0fa7806bc9cb16967d97aef3c3784e7d.jpg',
  },{
    name: 'Product 6',
    price: '₹200',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://blob.apliiq.com/sitestorage/resized-products/4158520_4461_577_880.jpg?v=1',
  },
  // Add more products here
];

function ProductList() {
  return (
    <div className="transparent-container">
    <div className="container">
      <h1 className="title">Product List</h1>
      <nav className="navbar">
        {/* Add navbar content here */}
        <ul>
        <Link to='/home'> <li>Home</li></Link>
          <li>About</li>
          <li>Contact</li>
          <li>Customer Feedback</li>
          {/* Add more links or content as needed */}
        </ul>
      </nav>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.imageSrc} alt={product.name} />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <p className="product-features">{product.features}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default ProductList;