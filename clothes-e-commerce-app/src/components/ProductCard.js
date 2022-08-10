import { Link } from 'react-router-dom'

export const ProductCard = ({ product }) => {
    return (
        <div className='flex items-center w-full md:w-[45%] justify-between border rounded-3xl transition-all duration-300 hover:scale-110'>
            <img className='w-36 h-36 rounded-3xl object-cover' src={product.image} alt='img' />
            <div className='w-full flex justify-center items-center flex-col gap-3 text-base mr-4 px-4'>
                <h2 className='font-semibold uppercase'>{product.title}</h2>
                <p>
                    {product.price}TL
                </p>
                <div className='w-full flex justify-between items-center'>
                    <Link to={`/product/${product.id}`} className="cursor-pointer">
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl'>
                            View
                        </button>
                    </Link>
                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl'>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}
