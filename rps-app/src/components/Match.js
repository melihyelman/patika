import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGame } from '../context/gameContext'

export const Match = () => {
    const [counter, setCounter] = useState(3)
    const { score, game, player, computer } = useGame()
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prev => prev > 1 ? counter - 1 : 0)
        }, 1000)

        return () => clearInterval(interval)
    }, [counter])

    const handleClick = () => {
        if (score.player - score.computer === 3) {
            alert('You reached 3 score so you win!')
            navigate('/')
            window.location.reload();

        } else if (score.computer - score.player === 3) {
            alert('Computer reached 3 score so computer win!')
            navigate('/')
            window.location.reload();
        }
    }

    return (
        <>
            {counter === 0 ? (
                <div className='flex mt-[50px] flex-nowrap justify-between items-center'>
                    <div className='flex flex-col mr-10'>
                        <span className='uppercase text-xl font-normal mb-10 text-center text-white'>You Picked</span>
                        <div className={`bg-white bg-no-repeat bg-center w-[250px] h-[250px] rounded-[50%] border-[25px] border-${player} bg-${player} ${game[game.length - 1].result === "player" ? "shadow-" + player + "-active" : "shadow-" + player} bg-50 `}></div>
                    </div>
                    <div className='flex flex-col mx-8 text-center'>
                        <span className='uppercase text-5xl font-bold mb-[15px] text-white'>{game[game.length - 1].result === "player" ? "You Win" : game[game.length - 1].result === "computer" ? "You Lose" : "Draw"}</span>
                        <Link to="/" className='bg-white uppercase py-[10px] px-[20px] rounded-[5px] text-[0.8rem]' onClick={handleClick}>{score.player - score.computer === 3 ? <p>You Win <br /> Again?</p> : score.computer - score.player === 3 ? <p>Computer Win <br /> Again?</p> : "Play Again"}</Link>
                    </div>
                    <div className='flex flex-col ml-10'>
                        <span className='uppercase text-xl font-normal mb-10 text-center text-white'>The Hous Picked</span>
                        <div className={`bg-white bg-no-repeat bg-center w-[250px] h-[250px] rounded-[50%] border-[25px] border-${computer} bg-${computer} ${game[game.length - 1].result === "computer" ? "shadow-" + computer + "-active" : "shadow-" + computer} bg-50 `}></div>
                    </div>
                </div>
            ) : (<div className='flex mt-[50px] flex-nowrap justify-between items-center'>
                <div className='flex flex-col mr-10'>
                    <span className='uppercase text-xl font-normal mb-10 text-center text-white'>You Picked</span>
                    <div className={`bg-white bg-no-repeat bg-center w-[250px] h-[250px] rounded-[50%] border-[25px] border-${player} shadow-${player} bg-${player} bg-50`}></div>
                </div>
                <div className='flex flex-col ml-10'>
                    <span className='uppercase text-xl font-normal mb-10 text-center text-white'>The Hous Picked</span>
                    <div className='bg-[rgba(0,0,0,.3)] w-[250px] h-[250px] rounded-[50%] text-9xl flex items-center justify-center text-white font-bold'>{counter}</div>
                </div>
            </div>)}
        </>
    )
}
