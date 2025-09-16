import React from 'react'
import { Link } from 'react-router-dom'

const LoginSuccess = () => {
  return (
    <div style={{ backgroundColor: '#acc5fa', minHeight: '100vh', paddingTop: '100px' }}>
     <div className="container mt-5 text-center">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px", backgroundColor: "#e7f4e4" }}>
        <h1 className="text-success mb-3">✅ LOGIN SUCCESSFUL</h1>
        {/* <h4 className="text-muted">Now you can buy products</h4> */}
        <Link to="/product">
        <button className='btn btn-warning mt-auto' style={{color:"white"}}>Now You Can Start Shopping</button>
        </Link> 

      </div>
    </div>
    </div>
  )
}

export default LoginSuccess
