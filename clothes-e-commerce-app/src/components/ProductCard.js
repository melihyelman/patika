import { Link } from 'react-router-dom'
import { FaShoppingBasket, FaEye } from 'react-icons/fa'


export const ProductCard = ({ product }) => {
    return (
        <div className='flex items-center w-full md:w-[45%] justify-between border rounded-3xl transition-all duration-300 hover:scale-110'>
            <img className='w-36 h-36 rounded-3xl object-cover' src={product.image} alt='img' />
            <div className='w-full flex justify-center items-center flex-col gap-3 text-base mr-4 px-4'>
                <h2 className='font-semibold uppercase'>{product.title}</h2>
                <p>
                    {product.price}TL
                </p>
                <div className='flex items-center justify-between gap-4'>
                    <Link to={`/product/${product.id}`}>
                        <button className='flex-1 flex items-center gap-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl'>
                            <FaEye />View
                        </button>
                    </Link>
                    <button className='flex-1 flex items-center gap-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl'>
                        <FaShoppingBasket />Add
                    </button>
                </div>
            </div>
        </div>
    )
}
