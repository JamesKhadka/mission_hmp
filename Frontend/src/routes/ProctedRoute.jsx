import React from 'react'
import { useContext } from 'react'
import { authContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProctedRoute = ({ children, allowedRoles }) => {
  const { token, role } = useContext(authContext)

  //it allows to excess the route  if the user is authenticated and has the required role
  const isAllowed = allowedRoles.includes(role)

  // if the user is authenticated and has the required role, it renders the children
  const accessibleRoute = token && isAllowed ? children : <Navigate to='/login' replace={true} />

  return accessibleRoute;

}

export default ProctedRoute
