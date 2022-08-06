import { useEffect, useState } from 'react'
import { useGame } from '../context/gameContext'

export const Header = () => {
    const { score } = useGame()
    const [data, setData] = useState(score.player - score.computer)

    useEffect(() => {
        const interval = setInterval(() => {
            setData(score.player - score.computer)
        }, 3000)

        return () => clearInterval(interval)
    }, [score])

    return (
        <div className='w-full max-w-[43.75rem] mx-auto flex justify-between items-center border-[3px] border-[#606e85] p-5 rounded-[1.25rem]'>
            <h1 className='text-start text-[2.5rem] leading-8 uppercase font-bold text-white'>Rock<br /> Paper<br /> Scissors</h1>
            <div className='py-3 px-10 bg-white text-[#2a46c0] rounded-[5px]'>
                <span>Score</span>
                <div className='text-[#3b4363] font-bold text-[3.5rem]'>{data}</div>
            </div>
        </div>
    )
}
