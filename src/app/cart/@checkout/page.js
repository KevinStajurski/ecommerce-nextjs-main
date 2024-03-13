'use client'

import { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/firebase/config"
import { useCartContext } from "@/components/context/CartContext"

const Checkout = () => {
    const [address, setAddress] = useState('')
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }
    const { setOut } = useCartContext()

    const handleFinish = async (address) => {
        const docRef = await addDoc(collection(db, "orders"), { direccion: address })
        alert(`Compra realizada con exito con el id: ${docRef.id}`)
    }


    return (
        <div className="mb-auto">
            <p className="m-8">Checkout</p>
            <p className="m-8 inline-block">Ingrese la direccion de envio:</p>
            <input onChange={handleAddress} />
            <button className="m-8 bg-slate-200 rounded-2xl px-2 block" onClick={() => handleFinish(address)}>Finalizar compra</button>
            <button className="m-8 bg-slate-200 rounded-2xl px-2" onClick={() => setOut(false)}>Volver al carrito</button>
        </div>
    )
}

export default Checkout