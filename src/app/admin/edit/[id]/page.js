'use client'

import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { useEffect, useState } from 'react'

const Edit = ({ params }) => {

    const [item, setItem] = useState({
        category: null,
        description: null,
        id: null,
        image: null,
        name: null,
        price: null,
        size: null,
        stock: null
    })

    useEffect(() => {
        const getItem = async () => {
            const itemRef = doc(db, "products", params.id)
            const itemSnap = await getDoc(itemRef)
            itemSnap.exists() && setItem(itemSnap.data())
        }
        item.category == null && getItem()
    }, [item])

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }

    const handleUpdate = async (item) => {
        await setDoc(doc(db, "products", item.id), item)
        alert("Producto actualizado con exito!")
    }

    return (
        <div className='mb-auto mx-16'>
            <p className="m-2 text-2xl">Editar producto</p>
            <p className='m-2'>ID</p>
            <input className='m-2' onChange={handleChange} name='id' defaultValue={item.id} disabled="true" />
            <p className='m-2'>Nombre</p>
            <input className='m-2' onChange={handleChange} name='name' defaultValue={item.name} />
            <p className='m-2'>Descripcion</p>
            <textarea className='m-2 h-32 w-96' type='text' onChange={handleChange} name='description' defaultValue={item.description} />
            <p className='m-2'>Precio</p>
            <input className='m-2' onChange={handleChange} name='price' defaultValue={item.price} />
            <p className='m-2'>Categoria</p>
            <input className='m-2' onChange={handleChange} name='category' defaultValue={item.category} />
            <p className='m-2'>Stock</p>
            <input className='m-2' onChange={handleChange} name='stock' defaultValue={item.stock} />
            <p className='m-2'>Talle</p>
            <input className='m-2' onChange={handleChange} name='size' defaultValue={item.size} />
            <button className="m-4 bg-slate-200 rounded-2xl px-2 block" onClick={() => handleUpdate(item)}>Actualizar</button>
        </div>
    )
}

export default Edit