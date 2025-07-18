import React from 'react';
import myImg from './new_image.png';
import About from './About';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <>

    {/* <div className="animation-wrapper " style={{ marginBottom: "0px", paddingBottom: "0px" }}>
            <Slider {...settings}>
          <div>
            <img src={myImg3} alt="" style={{height:"90px",width:"100%",objectFit: "cover"}} />
          </div>
          <div>
            <img src={myImg1} alt="" style={{height:"90px",width:"100%",objectFit: "cover"}}/>
          </div>
          <div>
            <img src={myImg2} alt="" style={{height:"90px",width:"100%",objectFit: "cover"}}/>
          </div>
          <div>
            <img src={myImg4} alt="" style={{height:"90px",width:"100%",objectFit: "cover"}}/>
          </div>
          <div>
            <img src={myImg5} alt="" style={{height:"90px",width:"100%",objectFit: "cover"}}/>
          </div>
          <div>
            <img src={myImg6} alt="" style={{height:"90px",width:"100%",objectFit: "cover"}}/>
          </div>
        </Slider>
        </div> */}

   
    {/* Hero Section */}
      {/* <div style={{ backgroundColor: '#acc5fa',height:"100vh", padding: '80px 10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ maxWidth: '600px',gap:"30px" }}>
          <h1 className="fw-bold text-white "style={{fontFamily: "Georgia, 'Times New Roman', Times, serif"}}>Welcome To <span style={{ color: '#28a745' }}>SMART</span></h1>
          <h4 className="text-white mt-3 "style={{fontFamily: "Georgia, 'Times New Roman', Times, serif"}}>Explore the best deals on fashion, electronics, and more.</h4>
          <div className="mt-4 d-flex gap-3">
            <Link to="/product"><button className="btn btn-primary">EXPLORE PRODUCTS</button></Link>
            <Link to="/about"><button className="btn btn-primary">LEARN MORE</button></Link>
          </div>
        </div>
        <div>
          <img src={myImg} alt="cart" style={{ width: '600px', maxHeight: '800px' }} />
        </div>
      </div>
      <About/> */}


      <div
  style={{
    backgroundColor: '#acc5fa',
    padding: '80px 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    minHeight: '100vh', // use minHeight instead of height
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
