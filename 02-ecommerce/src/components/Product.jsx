import React, { useState, useContext } from 'react'
import { CartContext } from '../context/cartContext'


export function Product({ ...producto }) {

    const { cartdata, incrementCartTotal, decrementCartTotal, removeProduct } = useContext(CartContext)

    return (
        <div className='flex flex-auto gap-4 items-center justify-center p-2'>
            <div className='relative flex flex-row gap-2 items-start '>
                <img className='w-30 h-30 rounded-2xl' src={producto.images} alt={producto.title} />
                <h2 className='text-amber-950 w-52'>{producto.title}</h2>
            </div>
            <span className='flex flex-col sm:flex-row gap-4 items-center' >
                <span className='flex items-center justify-center gap-2'>
                    <button onClick={() => { decrementCartTotal(producto) }}
                        className='bg-blue-500 p-3 text-white rounded-full w-10 h-10
                    flex items-center justify-center
                    '>-</button>
                    <span className='text-amber-950'>{producto.quantity}</span>
                    <button onClick={() => { incrementCartTotal(producto) }}
                        className='bg-blue-500 p-3 text-white rounded-full w-10 h-10
                    flex items-center justify-center'
                    >+</button>
                </span>
                <span>

                    <button onClick={() => { removeProduct(producto) }}
                        className='bg-red-500 text-white p-4 w-auto h-10 rounded-full
                    flex items-center justify-center
                    '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>

                    </button>
                </span>
            </span>
        </div>


    )
}

