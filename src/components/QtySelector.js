'use client'

import { useState } from "react"
import { useCartContext } from "./context/CartContext"

const QtySelector = ({ product }) => {

    const { addToCart, isInCart } = useCartContext()
    const [quantity, setQuantity] = useState(1)

    const add = () => {
        quantity < product.stock && setQuantity(quantity + 1)
    }

    const subtratc = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }

    return (
        <div className="flex gap-4 w-fit">
            {isInCart(product.id) ?
                <button className="bg-slate-200 rounded-2xl px-2 text-base" disabled={true}>Agregado</button> :
                <>
                    <div className="flex justify-center items-center gap-2">
                        <button onClick={subtratc} className="text-lg">-</button>
                        <p className="text-lg">{quantity}</p>
                        <button onClick={add} className="text-lg">+</button>
                    </div>
                    <button className="bg-slate-200 rounded-2xl px-2 text-base" onClick={() => addToCart({ ...product, quantity })}>Agregar al carrito</button>
                </>
            }
        </div>
    )
}

export default QtySelector