import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
import { useSelector } from 'react-redux'
import { FaCartPlus, FaCheckCircle, FaUser } from 'react-icons/fa'

const Navbar = () => {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  )

  const isloggedIn=useSelector((state)=>state.auth.isloggedIn)
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top " style={{ background: 'linear-gradient(90deg, #7ed6df, #70a1ff)', fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
        <div className="container">
          <Link
            className="navbar-brand fs-2 fw-semibold text-white fst-italic" to="/"
            style={{ letterSpacing: "2px", textShadow: "1px 1px 4px rgba(0,0,0,0.3)" }}>SMART </Link>

          {/* <Link className="navbar-brand fs-2 fw-semibold text-white fst-italic"  to="/">SMART</Link> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <Link className="nav-link fs-5 text-white custom-hover" to="/">HOME</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fs-5 text-white custom-hover" to="/about">ABOUT</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fs-5 text-white custom-hover" to="/product">PRODUCTS</Link>
              </li>
              {/* 
              <li className="nav-item">
                <Link className="nav-link fs-5 text-white custom-hover" to="/cart">CART
                  {cartCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link fs-5 text-white custom-hover" to="/signin">
                  <button className='button' >{isloggedIn ? <FaCheckCircle size={20} color='green'/> : <FaUser size={20}/>}</button>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fs-5 text-white custom-hover" to="/cart">
                  <div className="position-relative d-inline-block">
                    {/* <h1>&#x1F6D2;</h1> */}
                    <FaCartPlus size={37} style={{ color: 'white', cursor: 'pointer' }} />

                    {cartCount > 0 && (
                      <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                        style={{ fontSize: '0.9rem' }}
                      >
                        {cartCount}
                      </span>
                    )}
                  </div>
                </Link>
              </li>

            


            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}


export default Navbar