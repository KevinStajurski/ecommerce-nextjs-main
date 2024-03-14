'use client'

import { useCartContext } from "@/components/context/CartContext"

const CartLayout = ({ children, checkout }) => {
    const { out } = useCartContext()

    return (
        <>
            {
                out ? checkout : children
            }
        </>
    )
}

export default CartLayout