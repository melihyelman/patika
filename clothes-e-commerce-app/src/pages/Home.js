import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Header } from '../components/Header'
import { ProductContainer } from '../components/ProductContainer'
import { getAllProductsAsync } from '../redux/productSlice'

export const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProductsAsync())
    }, [])

    return (
        <>
            <Header />
            <div className='container mx-auto px-8 mt-8'>
                <ProductContainer />
            </div>
        </>
    )
}
