import Link from "next/link"
import Image from "next/image"

export default function ProductCard({ item }) {
    return (
        <div className="inline-block text-center shadow bg-white m-4">
            <Link href={`/category/${item.category}/${item.id}`}>
                <div className="h-80 w-64">
                    <Image src={item.image} width={200} height={400} alt={`${item.category} ${item.name}`} className="w-full h-full" />
                </div>
                <p> {item.name} </p>
                <p>$ {Intl.NumberFormat("de-DE").format(item.price)}</p>
            </Link>
        </div>
    )
}