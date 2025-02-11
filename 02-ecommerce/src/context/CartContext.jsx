import { use } from "react";
import { createContext, useState, useEffect } from "react";

// const initialCart = JSON.parse(localStorage.getItem('cart')) || []

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    //localstorage
    const cartInitial = JSON.parse(localStorage.getItem('cart')) || []

    const [cartTotal, setCartTotal] = useState(cartInitial)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartTotal))

        setInterval(() => {
            localStorage.removeItem('cart')
        }, 1000 * 60 * 60 * 24)

    }, [cartTotal])

    const getTotalProducts = () => {
        return cartTotal.reduce((acc, item) => acc + item.quantity, 0)
    }

    const incrementCartTotal = product => {

        const productInCartIndex = cartTotal.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cartTotal)
            newCart[productInCartIndex].quantity += 1
            return setCartTotal(newCart)

        }

        setCartTotal([...cartTotal, { ...product, quantity: + 1 }])
    };

    const decrementCartTotal = product => {

        if (cartTotal.find(item => item.id === product.id)) {
            const newCart = cartTotal.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item)
            if (cartTotal.find(item => item.id === product.id && item.quantity === 1)) {
                return
            } else {
                return setCartTotal(newCart)
            }
        }
    }

    const resetCart = () => {
        setCartTotal([])
    }

    const removeProduct = product => {
        const newCart = cartTotal.filter(item => item.id !== product.id)
        setCartTotal(newCart)
    }

    return (
        <CartContext.Provider value={{
            cartTotal: cartTotal,
            incrementCartTotal: incrementCartTotal,
            decrementCartTotal: decrementCartTotal,
            getTotalProducts: getTotalProducts,
            removeProduct: removeProduct,
            resetCart: resetCart
        }}>
            {children}
        </CartContext.Provider >
    )

}
