import { useContext, useState } from 'react'
import reactLogo from '../assets/react.svg'
import { CartContext } from '../context/cartContext'


export function NavBar() {

    // const cart = useContext(CartContext)
    const { cartTotal, incrementCartTotal } = useContext(CartContext)

    return (
        < nav className='bg-blue-500 p-4 w-full flex items-center justify-evenly' >
            <h1 className='text-white text-xl mr-4'>ShopStore</h1>
            <ul className='items-center space-x-4 hidden'>
                <li><a href='#' className='text-white'>Home</a></li>
                <li><a href='#' className='text-white'>About</a></li>
                <li><a href='#' className='text-white'>Contact</a></li>
            </ul>
            <div className='hidden  items-center space-x-4'>
                <a href='#' className='text-white'>Login</a>
                <a href='#' className='text-white'>Register</a>
            </div>
            <div className='block relative'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill='#fff'><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>
                <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center'>
                    {cartTotal.length}
                </span>
            </div>
        </nav >

    )
}