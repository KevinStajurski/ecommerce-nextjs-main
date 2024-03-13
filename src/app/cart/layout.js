'use client'

import { useCartContext } from "@/components/context/CartContext"
import { useEffect } from "react"

const CartLayout = ({ children, checkout }) => {
    const { out } = useCartContext()

    useEffect(() => {
        console.log(out)
    }, [out])

    return (
        <>
            {
                out ? checkout : children
            }
        </>
    )
}

export default CartLayout