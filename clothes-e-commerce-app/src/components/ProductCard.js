import { Link } from 'react-router-dom'
import { FaShoppingBasket, FaEye } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addBasket, removeBasket } from '../redux/basketSlice'
import { useLocalStorage } from '../hooks/useLocalStorage'


export const ProductCard = ({ product }) => {
    const [basket, setBasket] = useLocalStorage('basket', [])
    const dispatch = useDispatch()
    const handleCartClick = () => {
        dispatch(addBasket(product))
        setBasket(basket.find(item => item.id === product.id) ? basket : [...basket, product])
    }
    const handleCartRemove = () => {
        dispatch(removeBasket({ id: product.id }))
        setBasket(basket.filter(item => item.id !== product.id))
    }

    const inCart = basket.find(item => item.id === product.id)

    return (
        <div className='flex items-center w-full md:w-[47%]  justify-between border rounded-3xl transition-all duration-300 hover:scale-110 shadow'>
            <img className='w-36 h-36 rounded-3xl object-cover' src={product.image} alt='img' />
            <div className='flex-1 flex justify-center items-center flex-col gap-3 text-base mr-4 px-4'>
                <h2 className='font-semibold uppercase'>{product.title}</h2>
                <p>
                    {product.price}TL
                </p>
                <div className='flex-1 flex items-center justify-between gap-2'>
                    <Link to={`/product/${product.id}`}>
                        <button className='flex-1 flex items-center gap-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl'>
                            <FaEye />View
                        </button>
                    </Link>
                    {!inCart ? (
                        <button className='flex-1 flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl' onClick={handleCartClick}>
                            <FaShoppingBasket />Add
                        </button>
                    ) : (
                        <button className='flex-1 flex items-center gap-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-3xl' onClick={handleCartRemove}>
                            <FaShoppingBasket />Remove
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
