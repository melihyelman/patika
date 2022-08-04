import moment from 'moment'
import { numberToMoney } from '../helper'
import { Link } from 'react-router-dom'

export const Crypto = ({ currency }) => {
    return (
        <tr className="bg-white border-b hover:bg-gray-300 font-semibold text-sm" key={currency.id}>
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                <span className='flex gap-3'><img className='w-6 h-6' src={currency.image} alt="a" /> {currency.name} </span>
            </th>
            <td className="py-4 px-6">
                <span >${numberToMoney(currency.current_price)}</span>
            </td>
            <td className="py-4 px-6">
                {currency.price_change_percentage_24h < 0 ? <span className="  text-red-500">{currency.price_change_percentage_24h.toFixed(2)}%</span> : <span className="  text-green-500">{currency.price_change_percentage_24h.toFixed(2)}%</span>}
            </td>
            <td className="py-4 px-6">
                <p >${numberToMoney(currency.market_cap)}</p>
            </td>
            <td className="py-4 px-6">
                <p >{moment(currency.last_updated).fromNow()}</p>
            </td>
            <td className="py-4 px-6">
                <Link className='bg-green-500 text-base font-bold text-white hover:text-green-500 hover:bg-white border border-green-500 transition-all px-4 py-2 rounded-lg cursor-pointer' to={`/details/${currency.id}`}>Detail</Link>
            </td>
        </tr>
    )
}
