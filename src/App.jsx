import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './Home'
import About from './About'
import Products from './ReduxToolkit/feature/Products'
import Cart from './ReduxToolkit/feature/Cart'
import Signin from './ReduxToolkit/feature/Signin'
import Success from './Success'
import LoginSuccess from '../LoginSuccess'
import Footer from './Footer.jsx'
import Terms from './Terms.jsx'


const App = () => {
  let route=createBrowserRouter([{
    path:"/",
    element:<RootLayout/>,
    children:[
      {path:'/',element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/product",element:<Products/>},
      {path:"/cart",element:<Cart/>},
      {path:"/signin",element:<Signin/>},
      {path:"/success",element:<Success/>},
      {path:"/loginsuccess",element:<LoginSuccess/>},
      {path:"/footer",element:<Footer/>},
      {path:"/term",element:<Terms/>}    ]
  }],
  {
    basename: import.meta.env.BASE_URL, 
  })
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
      
    </div>
  )
}

export default App