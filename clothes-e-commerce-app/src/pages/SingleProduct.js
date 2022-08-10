import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductAsync } from '../redux/productSlice'
import { Header } from '../components/Header'
import { Product } from '../components/Product'

export const SingleProduct = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.product.activeProduct)
    useEffect(() => {
        dispatch(getProductAsync(id))
    }, [])

    return (
        <>
            <Header />
            {product && <Product product={product} />}
        </>
    )
}
