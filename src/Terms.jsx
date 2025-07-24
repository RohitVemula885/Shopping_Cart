import React from 'react'
import { FaArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Terms = () => {
  return (
    <div>
       <div className="py-5" style={{backgroundColor:"#acc5fa",minHeight:"100vh",padding: '40px 0',textAlign:"center"}}>
      <h2 className='text-white'>Terms & Conditions</h2>
      <p>Welcome to SMART! By using our website, you agree to the following terms:</p>
      <ul style={{listStyleType:"none"}}>
        <li><FaArrowRight/> You must be 18 years or older or have parental consent.</li>
        <li><FaArrowRight/> All products are sold as-is unless otherwise stated.</li>
        <li><FaArrowRight/> We reserve the right to modify or discontinue services.</li>
        <li><FaArrowRight/> Misuse of the website will result in suspension.</li>
      </ul>
      <p>For any questions, please contact support@smart.com.</p><br />
      <Link to="/">
      <button className='btn btn-primary'>Back To Home</button>
      </Link>
    </div>
    </div>
  )
}

export default Terms
