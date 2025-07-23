import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from './productslicer'
import { addtocart } from './cartslicer'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Footer'


const Products = () => {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.products)
  const user=useSelector((state)=>state.auth.user)
  const navigate=useNavigate()

 
  const handleBuy = (value) => {
    if (!user) {
      navigate("/signin");
    } else {
      const purchasedProduct = {
      ...value,
      quantity: 1,
      
    };
      navigate("/success", { state: { purchasedItem: purchasedProduct } }); 
    }
  }

  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])

  return (
    <>
    <section  style={{ backgroundColor: "#acc5fa", padding: '60px 0' }}>
    <div className="container my-4" >
      <h1 className="text-center mb-4 fw-bold" style={{color:"#2c3e50",fontSize:"3rem",letterSpacing: '1.5px',textShadow: '2px 2px 4px rgba(0,0,0,0.2)',whiteSpace: "normal",wordBreak: "break-word"}} >🛍️ PRODUCTS LIST</h1>

      {loading && <p className="text-center text-primary">Loading Products...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: '250px', objectFit: 'contain' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text fw-bold text-success">${product.price}</p>

                {/* <h1>{product.rating?.rate} ⭐</h1> */}
                

                <p>{Array.from({ length: Math.round(product.rating?.rate) }, (_, i) => (<span key={i}>⭐</span>))}</p>

                <div className="d-flex flex-wrap gap-4 mt-3 justify-content-center justify-content-md-start">
                <button  className="btn btn-warning mt-auto" style={{color:"white"}} onClick={()=>dispatch(addtocart(product))}>ADD TO CART</button>
                <button className="btn btn-primary mt-3 px-4" onClick={() => handleBuy(product)} >BUY</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </section>
        <Footer/>
        </>
        
  )
}

export default Products
