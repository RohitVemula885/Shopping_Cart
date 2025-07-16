import React from 'react'
import Products from './ReduxToolkit/feature/Products'
import 'bootstrap/dist/css/bootstrap.min.css'

const About = () => {
  return (
    <>
      <section className="py-5" style={{backgroundColor: '#acc5fa',minHeight: '100vh'}}>
        
    <div className="container">
    <div className="p-4 bg-white rounded shadow-sm">
      <h1 className="text-center text-uppercase mb-4 fw-bold text-success">About SMART</h1>

      <p className="fs-5 text-muted">
        Welcome to <strong className="text-success">SMART</strong> – your one-stop destination for everything from trendy fashion to cutting-edge electronics.
        We’re dedicated to giving you the very best online shopping experience, with a focus on quality, affordability, and customer satisfaction.
      </p>

      <p className="fs-5 text-muted">
        Founded in 2024, <strong className="text-success">SMART</strong> was created to bring convenience and great products directly to your fingertips.
        Whether you're shopping for the latest gadgets or stylish clothing, we carefully curate our collections to suit your lifestyle.
      </p>

      <p className="fs-5 text-muted">
        Thank you for choosing <strong className="text-success">SMART</strong>. We look forward to serving you!
      </p>
    </div>
  </div>
</section>

      <Products />
    </>
  )
}

export default About
