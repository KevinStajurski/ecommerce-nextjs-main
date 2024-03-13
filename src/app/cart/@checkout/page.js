'use client'

import { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/firebase/config"

const Checkout = () => {
    const [address, setAddress] = useState('')
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleFinish = async (address) => {
        const docRef = await addDoc(collection(db, "orders"), {direccion: address})
        alert(`Compra realizada con exito con el id: ${docRef.id}`)
    }


    return (
        <div className="mb-auto">
            <p className="m-8">Checkout</p>
            <p className="m-8 inline-block">Ingrese la direccion de envio:</p>
            <input onChange={handleAddress} />
            <button className="block m-8" onClick={() => handleFinish(address)}>Finalizar compra</button>
        </div>
    )
}

export default Checkout