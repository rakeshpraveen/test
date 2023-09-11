import React from 'react'
import { NavLink } from 'react-router-dom' ;
import '../App.css';

const Heading = () => {
  return (
    <div className='space-x-4'>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">contact</NavLink>
      
    </div>
  )
}

export default Heading
