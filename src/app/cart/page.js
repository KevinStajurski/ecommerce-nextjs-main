'use client'
import { useCartContext } from "@/components/context/CartContext"
import Image from "next/image"
const Cart = () => {
    const { cart, handleDelete, handleResetCart, handleCheckout } = useCartContext()

    return (
        <div className="mb-auto p-6">
            <p className="text-xl m-6">Carrito</p>
            {cart.length == 0 ?
                <p>Tu carrito está vacío</p> :
                <>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <div className="flex p-1 justify-between">
                                <div>
                                    <Image src={item.image} width={50} height={50} alt={`${item.category} ${item.name}`} />
                                </div>
                                <div className="text-center p-2 min-w-36">
                                    <p>Producto</p>
                                    {item.category === "remeras" && <p>Remera {item.name}</p>}
                                    {item.category === "buzos" && <p>Buzo {item.name}</p>}
                                    {item.category === "tazas" && <p>Taza {item.name}</p>}
                                </div>
                                <div className="text-center p-2 min-w-60">
                                    <p>ID</p>
                                    <p>{item.id}</p>
                                </div>
                                <div className="text-center p-2 min-w-20">
                                    <p>Precio unitario</p>
                                    <p>$ {Intl.NumberFormat("de-DE").format(item.price)}</p>
                                </div>
                                <div className="text-center p-2 min-w-20">
                                    <p>Subtotal</p>
                                    <p>$ {Intl.NumberFormat("de-DE").format(item.price * item.quantity)}</p>
                                </div>
                                <div className="text-center p-2 min-w-20">
                                    <p>Cantidad</p>
                                    <p>{item.quantity}</p>
                                </div>
                                <div className="flex justify-center items-center ml-6">
                                    <button onClick={() => handleDelete(item.id)}>
                                        <Image src={"/bi--trash3.svg"} width={25} height={25} alt="Eliminar" />
                                    </button>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                    <div className="flex justify-between mt-10">
                        <div className="flex gap-5">
                            <p>Total: $ {Intl.NumberFormat("de-DE").format(cart.reduce((acumulador, prod) => acumulador + prod.price * prod.quantity, 0))}</p>
                            <button className="bg-slate-200 rounded-2xl px-2" onClick={handleCheckout}>Realizar pago</button>
                        </div>
                        <button className="bg-slate-200 rounded-2xl px-2" onClick={handleResetCart}>Vaciar carrito</button>
                    </div>
                </>
            }
        </div>
    )
}

export default Cart