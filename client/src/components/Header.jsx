import React from 'react'
import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {

    const style = { color: "white" }

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    let Links = [
        { name: "Company", link: "/#" },
        { name: "About", link: "/#" },
        { name: "Gallery", link: "/#" },
        { name: "Contact", link: "/#" },
    ];
    return (
        <>
            <div className='flex justify-between items-center h-20 px-4 bg-zinc-900 text-black'>
                <div className='font-bold text-xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <span className='mr-4'>
                        <ion-icon className="logo-ionic"><svg id="logo-15" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" className="ccustom" fill="#17CF97"></path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" className="ccustom" fill="#17CF97"></path> <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" className="ccustom" fill="#17CF97"></path> <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" className="ccustom" fill="#17CF97"></path> </svg></ion-icon>
                    </span>
                    <label className='text-white'><a href="/">Apex Construction Inc.</a></label>
                </div>
                <ul className='hidden md:flex'>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='p-4 text-base text-white hover:text-yellow-600 duration-500'>
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose style={style} size={20} /> : <AiOutlineMenu size={20} style={style}/>}
                </div>
                <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='p-4 border-b text-xl'>{link.name}</li>
                        ))
                    }
                </ul>
            </div>
            <hr />
            <Outlet />
        </>
    )
}

export default Header