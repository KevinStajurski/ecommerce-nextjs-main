'use client'
import { useAuthContext } from "./context/AuthContext"
import Link from "next/link"
import AdminButton from "./AdminButton"

const LoginAndSignupOrLogout = () => {

    const { user, logout } = useAuthContext()

    return (
        <>
            {user.logged ?
                <div className="flex justify-between px-4">
                    <p>Bienvenido {user.email}</p>
                    <AdminButton/>
                    <button onClick={logout}>
                        <Link href={"/"}>
                            Cerrar sesión
                        </Link>
                    </button>
                </div> :
                (<div className="text-right">
                    <Link className="mx-5" href='/signup'>Crear cuenta</Link>
                    <Link className="mx-5" href='/login'>Iniciar sesión</Link>
                </div>)
            }
        </>
    )
}

export default LoginAndSignupOrLogout