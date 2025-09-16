import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import Animation from './Animation.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import store from './ReduxToolkit/store.jsx';
import { Provider } from 'react-redux';
// import Navbar2 from './Navbar2.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <Provider store={store}>
      <App/>
    </Provider>
    
  </StrictMode>,
)
