'use client'

import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { db, storage } from '@/firebase/config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const createProduct = async (newProduct, file) => {
    const storageRef = ref(storage, newProduct.id)
    const fileSnapshot = await uploadBytes(storageRef, file)
    const fileURL = await getDownloadURL(fileSnapshot.ref)
    const docRef = doc(db, "products", newProduct.id)
    return await setDoc(docRef, { ...newProduct, image: fileURL })
}

const Add = () => {
    const [newProduct, setNewProduct] = useState({
        id: '',
        category: '',
        price: '',
        stock: '',
        size: '',
        name: '',
        image: '',
        description: ''
    })

    const [file, setFile] = useState(null)

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        })
    }

    const handleReset = () => {
        setNewProduct({
            id: '',
            category: '',
            price: '',
            stock: '',
            size: '',
            name: '',
            image: '',
            description: ''
        })
        setFile(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct(newProduct, file)
        alert("Producto agregado con exito")
    }

    return (
        <div className='mb-auto'>
            <p className="m-4 text-2xl">Agregar nuevo producto</p>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name='id' className='block m-2' placeholder='ID' required />
                <input onChange={handleChange} name='category' className='block m-2' placeholder='Categoria' required />
                <input onChange={handleChange} name='price' className='block m-2' placeholder='Precio' required />
                <input onChange={handleChange} name='stock' className='block m-2' placeholder='Stock' required />
                <input onChange={handleChange} name='size' className='block m-2' placeholder='Talle' required />
                <input onChange={handleChange} name='name' className='block m-2' placeholder='Nombre' required />
                <input onChange={handleFile} type='file' name='image' className='block m-2' required />
                <textarea onChange={handleChange} name='description' className='block m-2' placeholder='Descripcion' required />
                <button className="m-4 bg-slate-200 rounded-2xl px-2" type='submit'>Agregar</button>
                <button className="m-4 bg-slate-200 rounded-2xl px-2" onClick={handleReset} type='reset'>Resetear</button>
            </form>
        </div>
    )
}

export default Add