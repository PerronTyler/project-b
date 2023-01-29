import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header className='bg-slate-900'>
                <nav>
                    <div className='display: flex flex-1 justify-evenly p-4'>
                        <Link className='text-white' to="/#">Services</Link>
                        <Link className='text-white' to="/#">About Us</Link>
                        <Link className='text-blue-500 font-bold' to="/">Apex Craftsmen Inc</Link>
                        <Link className='text-white' to="/#">Gallery</Link>
                        <Link className='text-white' to="/#">Contact</Link>
                    </div>
                </nav>
                <hr />
                <Outlet />
            </header>
        </div>
    )
}

export default Header