'use client'

import { useAuthContext } from "@/components/context/AuthContext"
import { useState } from "react"
import { useRouter } from "next/navigation"

const Login = () => {

    const router = useRouter()

    const { loginUser } = useAuthContext()
    const [values, setValues] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <div className="flex items-center flex-col gap-1 mt-4 mb-auto">
            <p>E-mail</p>
            <input
                name="email"
                required
                className="text-center"
                placeholder="Ingrese su e-mail"
                onChange={handleChange}
            />
            <p>Contraseña</p>
            <input
                name="password"
                required
                type="password"
                className="text-center"
                placeholder="Ingrese su clave"
                onChange={handleChange}
            />
            <button
                onClick={() => {
                    loginUser(values)
                    router.push('/')
                }}
                className="mt-3 bg-slate-200 rounded-2xl px-2">
                Iniciar sesión
            </button>
        </div>
    )
}

export default Login