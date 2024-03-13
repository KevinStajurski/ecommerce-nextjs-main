import Image from 'next/image'
import QtySelector from './QtySelector'

const ProductDetail = ({ product }) => {
    return (
        <div className='w-full mt-12 flex justify-evenly'>
            <div>
                <Image src={product.image} width={400} height={400} alt={`${product.category} ${product.name}`}/>
            </div>
            <div>
                <p className='text-2xl font-bold mb-4'>{product.name}</p>
                <p className='text-lg mb-4'>{product.description}</p>
                <p className='text-lg mb-4'>$ {Intl.NumberFormat("de-DE").format(product.price)}</p>
                <p className='text-base mb-4'>Stock: {product.stock}</p>
                <QtySelector product={product} />
            </div>
        </div>
    )
}

export default ProductDetail