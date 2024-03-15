'use client'

import { doc, deleteDoc } from "firebase/firestore"
import Image from "next/image"
import Link from "next/link"
import { db } from "@/firebase/config"
import { useRouter } from "next/navigation"

const ProductsTable = ({ items }) => {

    const router = useRouter()

    //Eliminar producto
    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "products", id))
        alert("Producto eliminado con exito.")
        router.refresh()
    }

    return (
        <div>
            <button className="m-4 bg-slate-200 rounded-2xl px-2" onClick={() => router.push('admin/add')}>
                Agregar nuevo producto
            </button>
            <button className="m-4 bg-slate-200 rounded-2xl px-2" onClick={() => router.refresh()}>
                Actualizar
            </button>
            <button className="m-4 bg-slate-200 rounded-2xl px-2" onClick={() => router.push('admin/orders')}>
                Pedidos
            </button>
            <table>
                <thead>
                    <tr>
                        <th className="p-2">ID</th>
                        <th className="p-2">Categoria</th>
                        <th className="p-2">Precio</th>
                        <th className="p-2">Stock</th>
                        <th className="p-2">Talle</th>
                        <th className="p-2">Nombre</th>
                        <th className="p-2">Imagen</th>
                        <th className="p-2">Descripcion</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td className="p-2">{item.id}</td>
                            <td className="p-2">{item.category}</td>
                            <td className="p-2">$ {Intl.NumberFormat("de-DE").format(item.price)}</td>
                            <td className="p-2">{item.stock}</td>
                            <td className="p-2">{item.size}</td>
                            <td className="p-2">{item.name}</td>
                            <td className="p-2">
                                <Image src={item.image} width={200} height={200} alt={`${item.category} ${item.name}`} />
                            </td>
                            <td className="p-2">{item.description}</td>
                            <td>
                                <Link className="p-2" href={`/admin/edit/${item.id}`}>Editar</Link>
                                <button className="p-2" onClick={() => handleDelete(item.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsTable