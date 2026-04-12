import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate,Outlet } from 'react-router-dom';

function ProtectedRoute() {
    let isLoggedin = useSelector((state) => state.user.isLoggedin);
  return (
    isLoggedin?<Outlet/>:<Navigate to={'/'} replace/>
  )
}

export default ProtectedRoute