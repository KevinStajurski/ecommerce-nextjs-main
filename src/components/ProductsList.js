import React from 'react'
import ProductCard from './ProductCard'

const ProductsList = ({ list }) => {
    return (
        <div className='flex flex-wrap justify-center mb-auto p-4'>
            {list.map(item =>
                <ProductCard item={item} key={item.id} />
            )}
        </div>
    )
}

export default ProductsList