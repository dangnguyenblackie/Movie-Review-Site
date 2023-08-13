import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

const Layout = () => {
  return (
    <Routes>
        <Route>

            <Outlet />
        </Route>
    </Routes>
  )
}

export default Layout