import ProductsList from "@/components/ProductsList"
import { Suspense } from "react"

export function generateStaticParams() {
    return [
        { category: "remeras" },
        { category: "tazas" },
        { category: "buzos" },
        { category: "todos" }
    ]
}

export const revalidate = 3600

export default async function category({ params }) {
    const response = await fetch(`https://ecommerce-nextjs-main.vercel.app/api/products/${params.category}`, { cache: "no-store" })
        .then(r => r.json())
    return (
        <Suspense fallback={<p>Cargando...</p>}>
            <div className="flex justify-center mb-auto">
                <ProductsList list={response} />
            </div>
        </Suspense>
    )
}