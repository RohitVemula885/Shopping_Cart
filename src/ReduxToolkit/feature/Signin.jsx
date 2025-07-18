import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from './authslicer'

const Signin = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {user,error}=useSelector((state)=>state.auth)

  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(login({username,password}))
  }

     useEffect(() => {
      if (user) {
        navigate('/loginsuccess');
      }
    }, [user, navigate]);

  return (
    <div style={{backgroundColor:"#acc5fa",minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",padding:"20px"}}>
    <div className="card shadow p-4 w-100" style={{ maxWidth: '400px' }}>
      <h2 className='text-center ' style={{color:"blue"}}> 🔐 LOGIN</h2>
        <form action="" onSubmit={handleSubmit}>
          <input  className="form-control my-2" type="text" value={username} required placeholder='ENTER USERNAME' onChange={(e)=>setUsername(e.target.value)} />
          <input  className="form-control my-2" type="password" value={password} required placeholder='ENTER PASSWORD' onChange={(e)=>setPassword(e.target.value)} />

          <button className="btn btn-primary w-100">LOGIN</button>
          {error && <div className="text-danger mt-2 text-center">{error}</div>}

        </form>
    </div>
    </div>
  )
}

export default Signin
