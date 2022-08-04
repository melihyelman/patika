import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CrpytoList } from '../components/CrpytoList'
import { Header } from '../components/Header'
import { Loader } from '../components/Loader'
import { getAllCryptoAsync, setPage } from '../redux/cryptoSlice'

export const Home = () => {
    const { data, page, loading } = useSelector(state => state.crypto)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCryptoAsync(page))
    }, [page])

    return (
        <>
            <Header />
            <div className='container mx-auto py-8 px-4'>

                {loading ? <Loader /> : <CrpytoList data={data} />}
            </div>
        </>
    )
}
