import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from './productslicer'
import { addtocart } from './cartslicer'
import Signin from '../../Signin'

const Products = () => {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])

  return (
    <>
    <section  style={{ backgroundColor: "#acc5fa", padding: '60px 0' }}>
    <div className="container my-4" >
      <h1 className="text-center mb-4 fw-bold" style={{color:"#2c3e50",fontSize:"3rem",letterSpacing: '1.5px',textShadow: '2px 2px 4px rgba(0,0,0,0.2)'}} >🛍️ PRODUCTS LIST</h1>

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
                <div className="d-flex gap-5 mt-3">

                <button  className="btn btn-warning mt-auto" style={{color:"white"}}>ADD TO CART</button>
                <button className="btn btn-primary mt-auto" onClick={()=>dispatch(addtocart(product))}>BUY</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </section>
        <Signin/>
        </>
        
  )
}

export default Products
