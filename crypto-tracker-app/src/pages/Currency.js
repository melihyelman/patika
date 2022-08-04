import { useParams } from 'react-router-dom';
import { Header } from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../components/Loader';
import { useEffect } from 'react';
import { getSingleCryptoAsync } from '../redux/cryptoSlice';
import { ImCross } from 'react-icons/im';
import CurrencyItem from '../components/CurrencyItem';


export const Currency = () => {
    const { current, loading, error } = useSelector(state => state.crypto)
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSingleCryptoAsync(id))
    }, [id])

    return (
        <>
            <Header />
            <div className='container mx-auto py-8 px-4 h-full'>
                {loading && !error && <Loader />}
                {!loading && error && <div className='w-full flex gap-4 justify-center items-center bg-red-400 font-bold  text-lg px-4 py-6 rounded-md text-white'><ImCross size="18" className='ring ring-white rounded-full ' />{`There are no cryptocurrency named ${id}.`}</div>}
                {!loading && !error && current && <CurrencyItem currency={current} />}
            </div>
        </>
    )
}
