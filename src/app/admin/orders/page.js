'use client'

import { db } from "@/firebase/config"
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"

const Orders = () => {

    const [ordersList, setOrdersList] = useState([])

    useEffect(() => {
        const aux = async () => {
            const querySnapshot = await getDocs(collection(db, "orders"))
            querySnapshot.forEach((doc) => { setOrdersList([...ordersList, doc.data()]) })
        }
        ordersList.length == 0 && aux()
    }, [ordersList])

    return (
        <div className="mb-auto">
            <p>Pedidos</p>
            {ordersList.map((item) => (
                <>
                    <p>Direccion a despachar:</p>
                    <p>{item.direccion}</p>
                    <p>Pedido: (en desarrollo)</p>
                </>
            ))}
        </div>
    )
}

export default Orders