import ProductDetail from "@/components/ProductDetail"

export async function generateMetadata({ params, searchParams }, parent) {
    const response = await fetch(`https://ecommerce-nextjs-main.vercel.app/api/products/${params.category}/${params.id}`)
        .then((r) => r.json())

    return {
        title: response.name,
        description: response.description
    }
}

const id = async ({ params }) => {
    const response = await fetch(`https://ecommerce-nextjs-main.vercel.app/api/products/${params.category}/${params.id}`, { cache: "no-store" })
        .then(r => r.json())

    return (
        <div className="flex justify-center mb-auto">
            <ProductDetail product={response} />
        </div>
    )
}

export default id