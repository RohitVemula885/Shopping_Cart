import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import Animation from './Animation.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import store from './ReduxToolkit/store.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import Navbar2 from './Navbar2.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <Provider store={store}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
      
      <App/>
      </BrowserRouter>
    </Provider>
    
  </StrictMode>,
)
