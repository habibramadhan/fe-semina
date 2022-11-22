import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

export default function NavLink({to, children}) {
  const navigate = useNavigate();
  return <Nav.Link onClick={() => navigate(to)}>{children}</Nav.Link>;
}
