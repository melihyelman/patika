import Chart from "chart.js/auto";
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from 'react-redux'
import { changeInterval, changeType, getSingleCryptoStaticAsync } from '../redux/cryptoSlice';

let intervals = [
    { label: "1D", value: 1 },
    { label: "1M", value: 30 },
    { label: "6M", value: 180 },
    { label: "1Y", value: 365 },
];
let types = [
    { label: "Prices", value: "prices" },
    { label: "MarketCap", value: "market_caps" },
];

const ChartItem = ({ data, id }) => {
    const { interval, type } = useSelector(state => state.crypto)
    const dispatch = useDispatch()

    return (
        <>
            <div className='flex justify-between items-center border bg-gray-200 border-gray-300 rounded-md mt-8 mb-4'>
                <div className='flex gap-2 p-2 font-semibold text-sm'>
                    {types.map(item => (
                        <button key={item.label} className={`p-2 border border-gray-400 hover:bg-gray-400 transition-all rounded-md ${type.label === item.label && "bg-gray-400"}`} onClick={() => dispatch(changeType(item))}>{item.label}</button>

                    ))}
                </div>
                <div ></div>
                <div className='flex gap-2 p-2 font-semibold'>
                    {intervals.map(item => (
                        <button key={item.label} className={`p-2 border border-gray-400 hover:bg-gray-400 transition-all rounded-md ${interval.value === item.value && "bg-gray-400"}`} onClick={() => { dispatch(changeInterval(item)); dispatch(getSingleCryptoStaticAsync(id, item.value)) }}>{item.label}</button>
                    ))}
                </div>
            </div>
            <Line
                data={{
                    labels: data[type.value].map((coin) => {
                        let date = new Date(coin[0]);
                        let time = moment(date).format('LT')
                        return interval.value === 1 ? time : date.toLocaleDateString();
                    }),
                    datasets: [
                        {
                            data: data[type.value].map((coin) => {
                                return coin[1];
                            }),
                            label: `${type.label} from Past ${interval.value} days in usd`,
                            borderColor: "#1E90FF",
                            borderWidth: 1,
                            hoverBorderColor: "#002244",
                            hoverBorderJoinStyle: "round",
                            fill: true,
                            backgroundColor: "rgba(210, 228, 241, 0.8)",
                            borderJoinStyle: "round",
                        },
                    ],
                }}
                height={250}
                options={{
                    elements: {
                        point: {
                            radius: 2,
                            backgroundColor: "#002244",
                        },
                    },
                }}
            />
        </>
    )
}

export default React.memo(ChartItem);