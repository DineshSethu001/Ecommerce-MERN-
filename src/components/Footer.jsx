




import React from 'react'
import { assets } from '../assets/img/assets'

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div className="">
                <img src={assets.logo} className="mb-5 w-32" alt=""/>
                <p className='w-full sm:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sint laborum, minima laboriosam, omnis at praesentium aliquam quasi deserunt sapiente autem voluptas, odio nostrum adipisci iste nihil explicabo aspernatur quaerat!</p>
            </div>
            <div className="">
                <p className='text-xl font-medium mg-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                 
                </ul>
            </div>
            <div className="">
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 987654321</li>
                    <li>contact@dummy.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com -All</p>
        </div>
    </div>
  )
}

export default Footer