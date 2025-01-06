import React from 'react'
import './Style.css'

const Header = () => {
  return (
    <>
  <nav className="navbar">
    <div className="logo">
      <h1>ShopLogo</h1>
    </div>
    <ul className="nav-links">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Products</a>
      </li>
      <li>
        <a href="#">About Us</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
    <div className="cart">
      <a href="#">Cart (0)</a>
    </div>
  </nav>
</>

   
  )
}

export default Header