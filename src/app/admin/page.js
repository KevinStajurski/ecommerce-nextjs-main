import ProductsTable from "@/components/ProductsTable"

const admin = async () => {
    const response = await fetch(`https://ecommerce-nextjs-main.vercel.app/api/products/todos`, { cache: "no-store" })
        .then(r => r.json())

    return (
        <div className="p-4 mb-auto">
            <p className="m-4 text-2xl">Panel de administración</p>
            <ProductsTable items={response} />
        </div>
    )
}

export default admin