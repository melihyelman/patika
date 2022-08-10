import { useSelector } from 'react-redux'
import { Header } from '../components/Header'
import { ProductCard } from '../components/ProductCard'

export const Basket = () => {
    const { basket } = useSelector(state => state.basket)
    return (
        <>
            <Header />
            <div className='container mx-auto pb-8 mt-8'>
                <h1 className='text-3xl text-center uppercase mb-8'>Basket</h1>
                <table className="min-w-full">
                    <thead className="border-b">
                        <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Title
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {basket.map(product => (
                            <tr className="border-b">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> {product.title}</td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {product.price}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}
