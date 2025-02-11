import React from 'react';

export const InfoProduct = ({ ...product }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-y-2 '>
            <h1 className='text-lg text-black'>{product.category.name}</h1>
            <img src={product.images} alt={product.title} className='w-96 h-96 rounded-2xl' />
            <h2 className='text-lg  text-black'>{product.title}</h2>
            <span className='text-lg  text-black'>{product.description}</span>
        </div>
    )
}