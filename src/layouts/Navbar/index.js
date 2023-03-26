import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

export default function Navbar() {
  const activeClass = ({isActive}) => isActive ? 'current' : undefined
  return (
    <ul>
      <li NavLink className={activeClass}> <Link to="/">Home</Link></li>
      <li NavLink className={activeClass}> <Link to="/about">About</Link></li>
      <li NavLink className={activeClass}> <Link to="/csv">CSV</Link></li>
      <li NavLink className={activeClass}> <Link to="/tribes">Tribes</Link></li>
    </ul>
  )
}
