import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart, clearcart, decreasecart, removefromcart } from './cartslicer'
import myImg from './img_remove.png';
import { Link, useNavigate } from 'react-router-dom';


const Cart = () => {

  const cartItem = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const user = useSelector((state) => state.auth.user)
  const navigate = useNavigate()

  // const handleBuy=()=>{
  //   if(!user){
  //     navigate("/signin")
  //   }
  //   else{
  //     // dispatch(clearcart())
  //     navigate("/success")
  //   }
  // }

 


  const handleBuy = (value) => {
    if (!user) {
      navigate("/signin");
    } else {
      dispatch(removefromcart(value.id)); // remove just that item
      navigate("/success", { state: { purchasedItem: value } }); // pass item to success page
    }
  }

  const handlebuyall = () => {
    if (!user) {
      navigate("/signin")
    } else {
      const purchasedItem = [...cartItem];
      dispatch(clearcart())
      navigate("/success", { state: { purchasedItem } })
    }
  }


  return (
    <div style={{ backgroundColor: "#acc5fa", minHeight: "100vh", padding: "20px" }}>
      <div className="container mt-4" >
        {/* <h1 className="text-center mb-4">🛒 Cart</h1> */}
        <h1 className="text-center mb-4 fw-bold" style={{ color: '#0b3d91', fontSize: '2.8rem', letterSpacing: '1px', textShadow: '1px 1px 2px rgba(0,0,0,0.2)', whiteSpace: "normal", wordBreak: "break-word" }}>
          🛒 Your Shopping Cart
        </h1>

        <div className="row">
          {cartItem.map((value, id) => {
            return (
              <div className="col-md-4 col-sm-6 mb-4" key={id}>
                <div className="card h-100 shadow-sm">
                  <img src={value.image} alt={value.title} className="card-img-top p-3"
                    style={{ height: '200px', objectFit: 'contain' }} />

                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>

                    <div className="d-flex align-items-center gap-3 mt-2">
                      <button onClick={() => dispatch(addtocart(value))} className="btn btn-success btn-sm">+</button>
                      <p className="card-text mb-0"> <strong>Qty:</strong> {value.quantity}</p>
                      <button onClick={() => dispatch(decreasecart(value.id))} className="btn btn-danger btn-sm" >-</button>
                    </div>

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
                      <button className="btn btn-warning mt-auto px-5" style={{ color: "white", minWidth: "100px" }} onClick={() => handleBuy(value)}>BUY </button>
                    </div >

                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {cartItem.length == 0 && (
          <div className="d-flex flex-column justify-content-center align-items-center text-center mt-5">
            <img src={myImg} alt="" className="img-fluid mb-4" style={{ maxWidth: "400px" }} />
            <h1 className="text-secondary">YOUR CART IS EMPTY</h1>
            <p className="text-muted">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/product"><button className="btn btn-primary mt-3">Shop Now</button></Link>
          </div>
        )},

        {cartItem.length > 0 && (
          <div className="text-center mt-4">
            <button className='btn btn-success me-3' onClick={handlebuyall}>BUY ALL PRODUCTS</button>
            <button className="btn btn-danger mb-4 float  " onClick={() => dispatch(clearcart())}>
              ❌ Clear Cart
            </button>
            <h2><strong style={{ color: "green" }}>Cart Total:</strong> ${totalPrice.toFixed(2)}</h2>
          </div>


        )}
      </div>


    </div>
  )
}

export default Cart
