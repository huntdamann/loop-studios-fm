


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu';
import FocusCardsDemo from './components/Creations'
import Footer from "./components/Footer.js";
import Leader from "./components/Leader.js"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Nav />
   <Hero/>
   <Leader />
   <FocusCardsDemo/>
   <Footer />
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
