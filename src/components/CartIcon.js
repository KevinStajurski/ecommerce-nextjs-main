'use client'

import { useCartContext } from './context/CartContext'
import Image from 'next/image'

const CartIcon = () => {
    const { cart } = useCartContext()
    return (
        <div className='relative flex justify-center items-center'>
            <Image className='absolute' src={"/bi--cart2.svg"} width={40} height={40} alt='Carrito'/>
            <p className='absolute text-xs mb-1'>{cart.length}</p>
        </div>
    )
}

export default CartIcon