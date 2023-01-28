import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-slate-900'>
            <nav>
                <div>
                    <Link className='text-white' to="/#">Services</Link>
                    <Link className='text-white' to="/#">About Us</Link>
                    <Link className='text-blue-500' to="/">Apex Construction</Link>
                    <Link className='text-white' to="/#">Gallery</Link>
                    <Link className='text-white' to="/#">Contact</Link>
                    <Outlet />
                </div>
            </nav>
        </header>
    )
}

export default Header