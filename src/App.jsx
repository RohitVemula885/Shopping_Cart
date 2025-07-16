import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './Home'
import About from './About'
// import Products from './Products'
import Signin from './Signin'
import Products from './ReduxToolkit/feature/Products'
import Cart from './ReduxToolkit/feature/Cart'

const App = () => {
  let route=createBrowserRouter([{
    path:"/",
    element:<RootLayout/>,
    children:[
      {path:'/',element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/product",element:<Products/>},
      {path:"/cart",element:<Cart/>},
      {path:"/signin",element:<Signin/>}
    ]
  }])
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
      {/* <Products/> */}
    </div>
  )
}

export default App