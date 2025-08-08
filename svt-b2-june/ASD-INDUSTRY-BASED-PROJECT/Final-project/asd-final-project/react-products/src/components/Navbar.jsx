import React from 'react'
import {Link,useNavigate} from "react-router-dom"
const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const hl = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  };
  return <>
  <div className='container-fluid'>
    <ul className='nav float-right'>
    <li className='nav-item'>
        <Link to="/" className='nav-link'>Register</Link>
    </li>
    <li className='nav-item'>
        <Link to="/login" className='nav-link'>Login</Link>
    </li>
    {
      token && (
        <>
      <li className='nav-item'>
        <Link to="/home" className='nav-link'>Home</Link>
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
    <li className='nav-item'>
       <button className='btn btn-dark' onClick={hl}>Logout</button>
    </li>
        </>
      )
    }
   
    </ul>
  </div>

  </>
}

export default Navbar