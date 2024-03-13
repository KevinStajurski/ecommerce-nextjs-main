'use client'

import { useAuthContext } from "@/components/context/AuthContext"

const AdminLayout = ({ children }) => {

    const { user } = useAuthContext()

    return (
        <>
            {user.admin ? children : <div className="m-auto">Acceso denegado</div>}
        </>
    )
}

export default AdminLayout