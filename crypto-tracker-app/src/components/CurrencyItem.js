import React from 'react'
import { FaExternalLinkAlt, FaTwitter, FaCode, FaLink, FaArrowLeft, FaArrowDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { numberToMoney } from '../helper'
import ChartItem from './ChartItem'


const CurrencyItem = ({ currency }) => {

    return (
        <div className='w-full flex flex-col md:flex-row '>
            <div className="w-full md:w-1/3 border-b md:border-r md:border-b-0 border-gray-300 px-4">
                <Link className='w-full flex justify-center items-center gap-4 border text-sm mt-4 border-gray-400 py-2 px-4 rounded-lg mb-4 hover:bg-gray-200 transition-all' to="/"><FaArrowLeft />Go Back</Link>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <img src={currency.image.small} alt="x" />
                    <p className='text-2xl font-bold'>{currency.name}</p>
                </div>
                <span className='h-12 my-4 flex justify-center items-center bg-gray-200 p-2 text-xs rounded-md text-gray-900 font-bold'>Rank #{currency.market_cap_rank}</span>
                <div className='flex flex-wrap gap-1 justify-center items-center'>
                    <a href={currency.links.homepage[0]} className='h-8 flex items-center gap-2 bg-gray-200 hover:bg-gray-400 p-2 text-xs rounded-md text-gray-900 font-bold'><FaLink />{currency.links.homepage[0].replace(/(^\w+:|^)\/\//, '')} <FaExternalLinkAlt /></a>
                    <a href={currency.links.repos_url.github[0]} className='h-8 flex items-center gap-2 bg-gray-200 hover:bg-gray-400 p-2 text-xs rounded-md text-gray-900 font-bold'><FaCode /> Source Code <FaExternalLinkAlt /></a>
                    <a href={`http://twitter.com/${currency.links.twitter_screen_name}`} className='h-8 flex items-center gap-2 bg-gray-200 hover:bg-gray-400 p-2 text-xs rounded-md text-gray-900 font-bold'><FaTwitter /> @{currency.links.twitter_screen_name} <FaExternalLinkAlt /></a>
                </div>
                <div className='py-4 h-full '>
                    {currency.description.en.split(". ")[0] + "."}
                </div>
            </div>
            <div className='w-full md:w-2/3 md:px-4'>
                <h1 className='text-xl text-center font-semibold py-4 border-b border-gray-300'>{currency.name} Price</h1>
                <div className='flex justify-between items-center my-4'>
                    <span className=' text-xl font-bold'>${numberToMoney(currency.market_data.current_price.usd)}</span>
                    <span className={`flex items-center justify-center gap-2 text-white px-4 py-2 ${currency.market_data.price_change_percentage_24h.toFixed(2) >= 0 ? "bg-green-500" : "bg-red-500"} rounded-lg`}><FaArrowDown className={`${currency.market_data.price_change_percentage_24h.toFixed(2) >= 0 && "rotate-180"}`} />{currency.market_data.price_change_percentage_24h.toFixed(2)}%</span>
                </div>
                <div className='flex justify-between items-center border border-gray-300 rounded-md'>
                    <span className='p-2 font-semibold text-sm'><span className='text-xs font-light'>Low:</span> ${numberToMoney(currency.market_data.low_24h.usd)}</span>
                    <span className='border-x p-2 px-4 bg-gray-200'>24h</span>
                    <span className='p-2 font-semibold'><span className='text-xs font-light'>High:</span> ${numberToMoney(currency.market_data.high_24h.usd)}</span>
                </div>
                <div className='flex flex-col gap-6 my-4'>
                    <div className='flex justify-between items-center pb-2 border-b border-gray-300'>
                        <span >Market Cap:</span>
                        <span className='text-xl font-semibold'>${numberToMoney(currency.market_data.market_cap.usd)}</span>
                    </div>
                    <div className='flex justify-between items-center pb-2 border-b border-gray-300'>
                        <span >Volume:</span>
                        <span className='text-xl font-semibold'>${numberToMoney(currency.market_data.total_volume.usd)}</span>
                    </div>
                    <div className='flex justify-between items-center '>
                        <span >Circulating Supply:</span>
                        <span className='text-xl font-semibold'>${numberToMoney(currency.market_data.circulating_supply)}</span>
                    </div>
                </div>

                <ChartItem data={{ prices: currency.prices, market_caps: currency.market_caps }} id={currency.id} />
            </div>
        </div>
    )
}

export default React.memo(CurrencyItem)