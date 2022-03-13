
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AuthStatus from './AuthStatus'
import "./Layout.css"

export default function Layout() {
  return (
    <div className='navbar'>
      <AuthStatus />
      <div className='list'>

      <Link to="/">Home</Link>
      <Link to="/private-page">Listar Pets</Link>
      <Link to="/register-Pets">Registrar um Pet</Link>
      <Link to="/login">Login</Link>
        
      </div>
     
      <Outlet />
    </div>
  )
}