'use client'

import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const [out, setOut] = useState(false)

    //Verifica si el producto ya existe en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id == id)
    }

    //Agrega el producto al carrito
    const addToCart = (product) => {
        !isInCart(product.id) && setCart([...cart, product])
    }

    //Elimina el producto del carrito
    const handleDelete = (id) => {
        const newCart = cart.filter((prod) => prod.id !== id)
        setCart(newCart)
    }

    //Vacia el carrito
    const handleResetCart = () => {
        setCart([])
    }

    //Estado para controlar el renderizado condicional del slot checkout
    const handleCheckout = () => {
        setOut(true)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, handleDelete, isInCart, handleResetCart, handleCheckout, out, setOut }}>
            {children}
        </CartContext.Provider>
    )
}