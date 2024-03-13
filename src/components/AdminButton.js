'use client'

import Link from "next/link"
import { useAuthContext } from "./context/AuthContext"

const AdminButton = () => {

    const { user } = useAuthContext()

    if (user.admin) {
        return <Link href={"/admin"}>Administrar</Link>
    }

}

export default AdminButton