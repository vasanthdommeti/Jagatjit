import React from 'react';
import { BrowserRouter, HashRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
// import Login from './Components/LoginPage/Login';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      </HashRouter>
  </React.StrictMode>
);
 
