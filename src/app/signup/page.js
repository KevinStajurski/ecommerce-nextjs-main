'use client'
import { useAuthContext } from '@/components/context/AuthContext'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SignUp = () => {

    const router = useRouter()

    const { registerUser } = useAuthContext()
    const [values, setValues] = useState({ email: '', password: '', passwordConfirm: '' })

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
            <p>Confirmar contraseña</p>
            <input
                required
                type="password"
                className="text-center"
                placeholder="Ingrese nuevamente su clave"
                onChange={handleChange}
            />
            <button
                onClick={() => {
                    registerUser(values)
                    router.push('/')
                }}
                className="mt-3 bg-slate-200 rounded-2xl px-2"
            >
                Crear cuenta
            </button>
        </div>
    )
}

export default SignUp