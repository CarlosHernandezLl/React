import React, { useState, useContext } from 'react'


export function CardProduct({ ...producto }) {

    const [increment, setIncrement] = useState(0)
    const [decrement, setDecrement] = useState(0)

    const incrementCart = () => {
        setIncrement(increment + 1)

    }

    const decrementCart = () => {

        if (cartdata === 0) {
            return
        }

        setCartData(cartdata - 1)

    }

    const send = () => {
        console.log('send')
    }


    return (
        <div className='flex flex-row gap-4 items-center justify-center mt-10'>
            <div className='relative flex flex-col items-center '>
                <img className='w-52 h-52 rounded-2xl' src={producto.images} alt={producto.title} />
                <h2 className='text-amber-950'>{producto.title}</h2>
            </div>
            <button onClick={decrementCart} className='bg-blue-500 text-white p-4 w-auto rounded-full'>-</button>
            <span className='text-amber-950'>{producto.quantity}</span>
            <button onClick={incrementCart} className='bg-blue-500 text-white p-4 w-auto rounded-full'>+</button>

        </div>
    )
}

