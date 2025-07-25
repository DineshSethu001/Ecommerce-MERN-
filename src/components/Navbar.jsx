import React from 'react'
import { assets } from '../assets/img/assets'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import 'boxicons'
import 'boxicons/css/boxicons.min.css';


const Navbar = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className="py-5 flex items-center justify-between font-medium">
            <img src={assets.logo} alt="logo" />
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700 '>
                <NavLink to="/" className="flex flex-col items-center gap-1">
                    <p className=''>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to="/collection" className="flex flex-col items-center gap-1">
                    <p className=''>Collection</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to="/about" className="flex flex-col items-center gap-1">
                    <p className=''>About </p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to="/contact" className="flex flex-col items-center gap-1">
                    <p className=''>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' /></NavLink>

            </ul>

            <div className="flex items-center gap-6">
                <img src={assets.search_icon} className="w-5 cursor-pointer" alt="search icon" />
                <div className="group relative">
                    <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="profile icon" />
                    <div className="hidden group-hover:block pt-4 right-0 absolute dropdown-menu">
                        <div className="flex flex-col w-36 gap-2 px-5 py-3 bg-slate-100 text-gray-700">
                            <p className='cursor-pointer hover:text-black'>My profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>

                </div>

                <Link to="/cart" className="relative">
                    <img src={assets.cart_icon} alt="cart" className='w-5 cursor-pointer' />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu" className='w-5 cursor-pointer sm:hidden ' />
            </div>
            {/* sideba menu for small screen */}
            <div className={`absolute top-0 right-0 bottom-0 z-50 bg-white transition-all duration-500 ease-in-out ${visible ? "w-full px-4 py-6" : "w-0 px-0 py-0 overflow-hidden"}`}>
                <div className="flex flex-col text-gray-600">

                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 " to="/">
                        
                            <p className='flex items-center gap-2'>Home
                                <i class='bx bx-home-circle'></i>
                            </p>
                            <hr className='w-1/4 ' />
                        
                    </NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6" to="/about"><p className='flex items-center gap-2' >ABOUT<i class='bx bx-user-voice'></i></p><hr className='w-1/4 ' /></NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6" to="/collection"><p className='flex items-center gap-2'>COLLECTION<i class='bx bx-notepad'></i></p><hr className='w-1/4 ' /></NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6" to="/contact"><p className='flex items-center gap-2'>CONTACT<i class='bx bx-phone-incoming'></i></p><hr className='w-1/4 ' /></NavLink>
                </div>
            </div>

        </div>
    )
}

export default Navbar