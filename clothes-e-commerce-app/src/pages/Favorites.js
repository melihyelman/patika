import { useSelector } from 'react-redux'
import { Header } from '../components/Header'
import { Link } from "react-router-dom"

export const Favorites = () => {
    const { favorite } = useSelector(state => state.favorite)
    return (
        <>
            <Header />
            <div className='container mx-auto px-4 pb-8 mt-8'>
                <h1 className='text-3xl text-center uppercase mb-8'>Favorites</h1>
                <table className="min-w-full">
                    <thead className="border-b">
                        <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Title
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Price
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                See
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {favorite.map(product => (
                            <tr className="border-b" key={product.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> {product.title}</td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {product.price}
                                </td>
                                <td className="text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <Link className='bg-green-500 rounded px-4 py-2 font-semibold text-white' to={`/product/${product.id}`}>See</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}
