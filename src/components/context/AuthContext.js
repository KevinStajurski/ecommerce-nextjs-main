'use client'

import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "@/firebase/config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/firebase/config"

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

    //Datos del usuario
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null,
        admin: null
    })

    //Crea un usuario nuevo en firebase
    const registerUser = async (values) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
    }

    //Inicia sesion en firebase
    const loginUser = async (values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
    }

    //Cierra sesion en firebase
    const logout = async () => {
        await signOut(auth)
    }

    //Setea los datos del usuario cuando los recibe de firebase
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid
                })
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                })
            }
        })
    }, [])

    //Ejecuta la verificación de permisos de administrador cuando se setea el user id
    useEffect(() => {
        if (user.uid) {
            //Verifica si el id de usuario existe en la coleccion de administradores
            const checkAdmin = async () => {
                const docRef = doc(db, "admins", user.uid)
                const docSnap = await getDoc(docRef)
                docSnap.exists() && setUser({ ...user, admin: true })
            }
            checkAdmin()
        }
    }, [user.uid])

    return (
        <AuthContext.Provider value={{ user, registerUser, loginUser, logout }}>
            {children}
        </AuthContext.Provider>
    )
}