import { useSelector } from 'react-redux'
import { ProductCard } from "./ProductCard"


export const ProductContainer = () => {
    const { products } = useSelector(state => state.product)

    return (
        <div className='flex items-center justify-start gap-10 flex-wrap pb-8'>
            {products.map(product => <ProductCard product={product} key={product.id} />)}
        </div>
    )
}
