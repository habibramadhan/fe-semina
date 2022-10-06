import React from 'react'
import NavLink from '../NavLink';

export default function Header() {
  return (
    <ul>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/categories'>Categories</NavLink>
        <NavLink to='/about'>About</NavLink> 
    </ul>
  )
}
