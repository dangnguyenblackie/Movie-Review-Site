import { Outlet, Route, Routes } from 'react-router-dom'

const Layout = () => {
  return (
    <main>
    <Routes>
            <Route />

            <Outlet />
    </Routes>
    </main>
    
  )
}

export default Layout