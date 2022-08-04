import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../redux/cryptoSlice'
import { Crypto } from './Crypto'

export const CrpytoList = ({ data }) => {
    const dispatch = useDispatch()
    const { page } = useSelector(state => state.crypto)
    const handlePage = (next = true) => {
        if (next) {
            dispatch(setPage(page + 1))
        } else if (page > 1) {
            dispatch(setPage(page - 1))
        }
    }
    return (
        <>
            <ul className="w-full h-10 border border-gray-300 flex justify-between mb-6 items-center shadow-sm rounded-lg ">
                <li onClick={() => handlePage(false)}>
                    <span className={`cursor-pointer py-2 px-3  ml-0 leading-tight rounded-l-lg border-r border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${page === 1 ? "bg-gray-500 text-gray-100" : "text-gray-500 bg-white"}`}>Previous</span>
                </li>

                <li onClick={() => handlePage()}>
                    <span className="cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border-l border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">Next</span>
                </li>
            </ul>
            <div className="overflow-x-auto border border-gray-300 relative shadow-md sm:rounded-lg">
                <table className="w-full text-base text-left text-gray-500 ">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Crypto name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                24H
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Market Cap
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Last Updated
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(currency => (
                            <Crypto currency={currency} key={currency.id} />
                        ))}


                    </tbody>
                </table>
            </div>
        </>
    )
}
