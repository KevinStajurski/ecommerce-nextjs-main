'use client'

import { useEffect } from "react"

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div>
            <p>Algo salió mal.</p>
            <hr />
            <button onClick={() => reset()}>Reintentar</button>
        </div>
    )
}