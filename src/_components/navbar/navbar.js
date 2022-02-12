import React from 'react';
import './navbar.css';
// import { Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div className="navbar">
    <li>
      <a href="/">Buy BTCPrinter</a>
    </li>
    <li>
      <a href="">About</a>
    </li>
    <li>
      <a href="">Print Chart</a>
    </li>
    <li>
      <a href="">Road Map</a>
    </li>
    <li>
      <a href="">DAPP</a>
    </li>
  </div>
  );
}
export default navbar;