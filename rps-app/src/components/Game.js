import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/gameContext'

export const Game = () => {
    const navigate = useNavigate()
    const { handleClick } = useGame()

    return (

        <div className='w-full relative mt-[3.125rem] flex flex-col'>
            <img className='absolute self-center mt-[4.375rem]' src='/images/bg-triangle.svg' alt="triangle" />
            <div className='flex justify-center'>
                <div onClick={() => { handleClick("paper"); navigate("/game") }} className='translate-x-6 hover:scale-110 transition-all duration-200 bg-white bg-no-repeat bg-center w-[160px] h-[160px] rounded-[50%] border-[18px] shadow-paper border-paper bg-50 bg-paper'></div>
                <div onClick={() => { handleClick("scissors"); navigate("/game") }} className='translate-x-32 hover:scale-110 transition-all duration-200 bg-white bg-no-repeat bg-center w-[160px] h-[160px] rounded-[50%] border-[18px] shadow-scissors border-scissors bg-50 bg-scissors'></div>
                <div onClick={() => { handleClick("rock"); navigate("/game") }} className='-translate-x-40 translate-y-52 hover:scale-110 transition-all duration-200 bg-white bg-no-repeat bg-center w-[160px] h-[160px] rounded-[50%] border-[18px] shadow-rock border-rock bg-50 bg-rock'></div>
            </div>
        </div>

    )
}
