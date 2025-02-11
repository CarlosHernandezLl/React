import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "./Product";

const FormatTable = () => {

}


export function CartPage({ productos }) {

    var [total, setTotal] = useState(
        productos.reduce((acc, item) => acc + item.price * item.quantity, 0)
    )

    var [envio, setEnvio] = useState(10)

    useEffect(() => {
        setTotal(
            productos.reduce((acc, item) => acc + item.price * item.quantity, 0)
        )
    }, [productos])


    return (
        <>
            {productos.length === 0 ? <h1 className='text-3xl font-bold pt-40 text-black flex
            items-center justify-center p-4'>No hay productos en el carrito</h1> :
                <main className="relative top-20" >
                    <h1 className='text-3xl font-bold text-black flex 
            items-center justify-center p-4
            '>Cart Page</h1>
                    <div className='flex flex-col md:flex-row justify-center px-4 w-screen'>
                        <div className='flex flex-col items-start justify-center'>
                            <div className='flex flex-col gap-2 items-center justify-center p-4'>
                                {
                                    productos.map((item) => {
                                        return (
                                            <Product key={item.id} {...item} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='flex flex-col px-20  '>
                            <h1 className='text-3xl font-bold text-black'>Total</h1>
                            <table>
                                <tbody>
                                    <tr className="grid grid-cols-3" >
                                        <span className='text-xl font-bold text-black'>Subtotal:</span>
                                        <span className='text-xl font-bold text-black flex items-center justify-center'>$</span>
                                        <span className='text-xl font-bold text-black flex justify-end'>{(total).toFixed(2)}</span>
                                    </tr>
                                    <tr className="grid grid-cols-3 justify-between" >
                                        <span className='text-xl font-bold text-black'>IGV:</span>
                                        <span className='text-xl font-bold text-black flex items-center justify-center'>$</span>
                                        <span className='text-xl font-bold text-black flex justify-end'>{(total * 0.18).toFixed(2)}</span>
                                    </tr>
                                    <tr className="grid grid-cols-3 justify-between" >
                                        <span className='text-xl font-bold text-black'>Shipping:</span>
                                        <span className='text-xl font-bold text-black flex items-center justify-center'>$</span>
                                        <span className='text-xl font-bold text-black flex justify-end'>{envio.toFixed(2)}</span>
                                    </tr>
                                    <tr className="grid grid-cols-3 justify-between" >
                                        <span className='text-xl font-bold text-black'>Total:</span>
                                        <span className='text-xl font-bold text-black flex items-center justify-center'>$</span>
                                        <span className='text-xl font-bold text-black flex justify-end'>{
                                            (total + total * 0.18 + envio).toFixed(2)
                                        }
                                        </span>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </main>
            }
        </>


    )

}