
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AuthStatus from './AuthStatus'

export default function Layout() {
  return (
    <div>
      <AuthStatus />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/private-page">Listar Pets</Link>
        </li>
        <li>
          <Link to="/register-Pets">Registrar um Pet</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}