import React from 'react'
import ReactDOM from 'react-dom/client.js'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './App.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client.js'
// import './index.css'
// import App from './App.jsx'ç

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
