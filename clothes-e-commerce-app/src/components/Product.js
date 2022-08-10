import { FaShoppingBasket, FaStar } from 'react-icons/fa'


export const Product = ({ product }) => {
    return (
        <div className='container mt-8 mx-auto px-4 flex items-stretch flex-col md:flex-row'>
            <img className='w-full md:w-[32rem] h-[32rem] rounded-3xl object-fill' src={product.image} alt="img" />
            <div className='md:ml-12 flex-1 pt-8 flex flex-col justify-center'>
                <h2 className='text-3xl font-semibold uppercase text-center pb-3 border-b mb-4'>{product.title}</h2>
                <p className='pb-3 border-b mb-4'>{product.description}</p>
                <p className='font-bold text-xl'>{product.price}TL</p>
                <div className='mt-8 pb-8 md:mt-auto flex items-center justify-between gap-16'>
                    <button className='flex-1 flex items-center gap-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl'>
                        <FaStar />Add To Favorites
                    </button>
                    <button className='flex-1 flex items-center gap-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl'>
                        <FaShoppingBasket />Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
