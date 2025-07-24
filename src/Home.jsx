import React from 'react';
import myImg from './new_image.png';
import About from './About';
import { Link } from 'react-router-dom';


const Home = () => {
  
  return (
    <>
    <div
  style={{
    backgroundColor: '#acc5fa',
    padding: '80px 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    minHeight: '100vh', 
  }}
>
  <div style={{ maxWidth: '600px' }}>
    <h1 className="fw-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
      Welcome To <span style={{ color: '#28a745' }}>SMART</span>
    </h1>
    <h4 className="text-white mt-3" style={{ fontFamily: "Georgia, serif" }}>
      Explore the best deals on fashion, electronics, and more.
    </h4>
    <div className="mt-4 d-flex gap-3">
      <Link to="/product"><button className="btn btn-primary">EXPLORE PRODUCTS</button></Link>
      <Link to="/about"><button className="btn btn-primary">LEARN MORE</button></Link>
    </div>
  </div>
  <div>
    <img src={myImg} alt="cart" style={{ width: '600px', maxWidth: '100%' }} />
  </div>
</div>
<About/>
    </>
  
   
   
  
  );

};



export default Home;
