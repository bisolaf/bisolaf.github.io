import React from 'react';
import ReactDOM from 'react-dom/client'; // Cleaner import: removed .js
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './App.css'; // Assuming this is your global CSS

// Ensure you only have ONE ReactDOM.createRoot call for your application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);