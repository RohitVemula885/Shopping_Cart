import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearcart, removefromcart } from './cartslicer'

const Cart = () => {

  const cartItem = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  return (
    <div style={{ backgroundColor: "#acc5fa", minHeight: "100vh", padding: "20px" }}>
      <div className="container mt-4" >
        {/* <h1 className="text-center mb-4">🛒 Cart</h1> */}
        <h1 className="text-center mb-4 fw-bold" style={{ color: '#0b3d91', fontSize: '2.8rem', letterSpacing: '1px', textShadow: '1px 1px 2px rgba(0,0,0,0.2)',whiteSpace: "normal",wordBreak: "break-word" }}>
          🛒 Your Shopping Cart
        </h1>
        <button className="btn btn-danger mb-4 float  " onClick={() => dispatch(clearcart())}>
          ❌ Clear Cart
        </button>
        <div className="row">
          {cartItem.map((value, id) => {
            return (
              <div className="col-md-4 col-sm-6 mb-4" key={id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="card-img-top p-3"
                    style={{ height: '200px', objectFit: 'contain' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">
                      <strong>Qty:</strong> {value.quantity}
                    </p>
                    <p className="card-text">
                      <strong>Price:</strong> ${value.price}
                    </p>
                    <p className="card-text text-success fw-bold">
                      TOTAL: ${value.price * value.quantity}
                    </p>
                    <div className="d-flex flex-wrap gap-3 mt-3 justify-content-center justify-content-md-start">

                    <button className="btn btn-danger" onClick={() => dispatch(removefromcart(value.id))}>
                      🗑 Remove
                    </button>
                    <button className="btn btn-warning mt-auto px-5" style={{color:"white",minWidth:"100px"}} >BUY </button>
                    </div >

                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {cartItem.length > 0 && (
          <div className="text-center mt-4">
            <h2><strong style={{ color: "green" }}>Cart Total:</strong> ${totalPrice.toFixed(2)}</h2>
          </div>


        )}
      </div>


    </div>
  )
}

export default Cart
