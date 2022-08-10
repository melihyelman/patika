import { FaShoppingBasket, FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { addBasket, removeBasket } from '../redux/basketSlice'
import { addFavorite, removeFavorite } from '../redux/favoriteSlice'


export const Product = ({ product }) => {
    const dispatch = useDispatch()
    const [basket, setBasket] = useLocalStorage('basket', [])
    const [favorite, setFavorite] = useLocalStorage('favorite', [])
    const handleCartClick = () => {
        dispatch(addBasket(product))
        setBasket(basket.find(item => item.id === product.id) ? basket : [...basket, product])
    }
    const handleCartRemove = () => {
        dispatch(removeBasket({ id: product.id }))
        setBasket(basket.filter(item => item.id !== product.id))
    }
    const handleFavoriteClick = () => {
        dispatch(addFavorite(product))
        setFavorite(favorite.find(item => item.id === product.id) ? favorite : [...favorite, product])
    }
    const handleFavoriteRemove = () => {
        dispatch(removeFavorite({ id: product.id }))
        setFavorite(favorite.filter(item => item.id !== product.id))
    }
    const inCart = basket.find(item => item.id === product.id)
    const inFavorite = favorite.find(item => item.id === product.id)

    return (
        <div className='container mt-8 mx-auto px-4 flex items-stretch flex-col md:flex-row'>
            <img className='w-full md:w-[32rem] h-[32rem] rounded-3xl object-fill' src={product.image} alt="img" />
            <div className='md:ml-12 flex-1 pt-8 flex flex-col justify-center'>
                <h2 className='text-3xl font-semibold uppercase text-center pb-3 border-b mb-4'>{product.title}</h2>
                <p className='pb-3 border-b mb-4'>{product.description}</p>
                <p className='font-bold text-xl'>{product.price}TL</p>
                <div className='mt-8 pb-8 md:mt-auto flex items-center justify-between gap-16'>
                    {!inFavorite ? (
                        <button className='flex-1 flex items-center gap-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl' onClick={handleFavoriteClick}>
                            <FaStar />Add To Favorites
                        </button>
                    ) : (
                        <button className='flex-1 flex items-center gap-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-3xl' onClick={handleFavoriteRemove}>
                            <FaStar />Remove To Favorites
                        </button>
                    )}

                    {!inCart ? (
                        <button className='flex-1 flex items-center gap-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl'
                            onClick={handleCartClick}>
                            <FaShoppingBasket />Add To Cart
                        </button>
                    ) : (
                        <button className='flex-1 flex items-center gap-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-3xl'
                            onClick={handleCartRemove}>
                            <FaShoppingBasket />Remove To Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
