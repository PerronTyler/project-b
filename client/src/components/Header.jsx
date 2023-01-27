import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to="#">Services</Link>
            <Link to="#">About Us</Link>
            <Link to="/">Apex Construction</Link>
            <Link to="#">Gallery</Link>
            <Link to="#">Contact</Link>
            <Outlet />
        </div>
    )
}

export default Header