'use client'
import { useRouter } from "next/navigation"
const NotFound = () => {
    const router = useRouter()
    return (
        <div>
            <p>Página no encontrada!</p>
            <button onClick={()=>router.back()}>Volver</button>
        </div>
    )
}

export default NotFound