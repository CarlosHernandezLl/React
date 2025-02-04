import { createContext, useContext, useEffect, useState } from "react";
import { CardProduct } from "./CardProduct";


export function CartPage({ productos }) {

    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <h1 className='text-3xl font-bold text-amber-200'>Cart Page</h1>
            <div className='flex flex-col gap-4 items-center justify-center mt-10 p-4'>
                {
                    productos.map((item) => {
                        return (
                            <CardProduct key={item.id} {...item} />
                        )
                    })
                }
            </div>
        </div>

    )

}