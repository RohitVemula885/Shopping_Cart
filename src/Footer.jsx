import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" text-white pt-4 pb-2 mt-auto" style={{ background: 'linear-gradient(90deg, #148f9cff, #70a1ff)',fontFamily: "Georgia, serif" }}>
      <div className="container text-center text-md-start">
        <div className="row">

          <div className=" text-center">
            <h5 className="text-uppercase fw-bold">Smart Shopping</h5>
            <p>Bringing you quality products at the best prices.</p>
            <p>Email: support@smartshop.com</p>
            <p>Developed by <i>-Rohit Vemula</i></p>
            {/* <p>Phone: +91 98765 43210</p> */}
          </div>
        </div>
        

         

          
        

        <div className="text-center mt-3 border-top pt-3">
          © {new Date().getFullYear()} Smart Shopping. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
