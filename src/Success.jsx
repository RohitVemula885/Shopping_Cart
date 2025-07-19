import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderId,setOrderId]=useState("")
  // const product = location.state?.purchasedItem;

  const single = location.state?.purchasedItem;
  const multiple = Array.isArray(single) ? single : null;
  const products = multiple || (single ? [single] : []);

  useEffect(()=>{
    const fakeId=  Math.floor(1000000 + Math.random() * 9000000)
    setOrderId(fakeId)
    // console.log(fakeId);
  },[])
  
  


  if (products.length === 0) {
    return (
      <div style={{backgroundColor:"#acc5fa",minHeight:"100vh",padding: '40px 0',textAlign:"center",color:"white"}}>
        <h3>No purchase found</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/product")}>Shop Now</button>
      </div>
    );
  }

  return (
    <div style={{backgroundColor:"#acc5fa",minHeight:"100vh",padding: '40px 0'}}>
    <div className="container mt-5 text-center">
      <h1 className="text-success mb-4">✅ Purchase Successful!</h1>
      <h4 style={{color:"green"}}>ORDER ID - <strong style={{color:"red"}}>{orderId}</strong></h4>
      {products.map((item, index) => (  
        <div className="card mb-3 mx-auto" style={{ maxWidth: "400px" }} key={index}>
          <div  className="card h-60 shadow-sm" >
          <img src={item.image} className="card-img-top p-3" alt={item.title} style={{ height: '150px', objectFit: 'contain' }} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity || 1}</p>
            <p>Total: ${(item.price * (item.quantity || 1)).toFixed(2)}</p>
          </div>
        </div>
          </div>
      ))}

      <button className='btn btn-warning' style={{color:"white"}} onClick={()=>navigate("/product")}>Continue Shopping</button>
    </div>
    </div>
  );
};

export default Success;
