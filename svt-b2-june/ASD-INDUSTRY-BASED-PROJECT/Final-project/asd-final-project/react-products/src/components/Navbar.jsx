import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {

  return <>
  <div className='container-fluid'>
    <ul className='nav float-right'>
    <li className='nav-item'>
        <Link to="/" className='nav-link'>Home</Link>
    </li>
     <li className='nav-item'>
        <Link to="/about" className='nav-link'>About</Link>
    </li>
    <li className='nav-item'>
        <Link to="/contact" className='nav-link'>Contact</Link>
    </li>
    <li className='nav-item'>
        <Link to="/service" className='nav-link'>Service</Link>
    </li>
    </ul>
  </div>

  </>
}

export default Navbar