import ProductsList from "@/components/ProductsList"

export default async function Home() {
  const response = await fetch(`https://ecommerce-nextjs-main-git-main-kevinstajurski.vercel.app/api/products/todos`, { cache: "no-store" })
    .then(r => r.json())

  return (
    <ProductsList list={response} />
  )
}