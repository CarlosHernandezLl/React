import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cartTotal, setCartTotal] = useState([])

    const incrementCartTotal = product => {

        if(cartTotal.find(item => item.id === product.id)){
            const newCart = cartTotal.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
            setCartTotal(newCart)
            return
        }

        setCartTotal([...cartTotal, {...product, quantity: 1}])


    };

    return (
        <CartContext.Provider value={{
            cartTotal: cartTotal,
            incrementCartTotal: incrementCartTotal
        }}>
            {children}
        </CartContext.Provider >
    )

}
