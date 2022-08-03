import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header'
import { bmiResults, dietLists } from "../data"


export const Result = () => {
    const oldestBMI = JSON.parse(localStorage.getItem('bmi')) || [];
    const { state: data } = useLocation()
    const [result, setResult] = useState({
        type: '',
        description: '',
        bgColor: '',
        color: '',
        img: '',
        result: ""
    })
    const bmiCalculate = () => {
        const weight = parseFloat(data.weight)
        const height = parseFloat(data.height / 100)
        const result = weight / (height * height)
        let info = bmiResults.find(item => item.min <= result && item.max >= result)
        return { ...info, result: result.toFixed(2) }
    }
    useEffect(() => {
        setResult(bmiCalculate())
    }, [])

    const dietList = dietLists[result.bgColor]
    if (result.result && !oldestBMI.find(item => item.result === result.result && item.name === data.name)) {
        localStorage.setItem('bmi', JSON.stringify([...oldestBMI, { name: data.name, result: result.result }]))
    }

    return (
        <>
            <Header />
            <div className='container m-auto'>
                <div className='w-full py-8 px-4 flex flex-col gap-8 justify-center items-center'>
                    <img className='w-[65%] object-cover' src={result?.img} alt="" />
                    <h1 className='text-2xl font-bold'>{`${data.name}'s BMI Results: ${result?.result}`}</h1>
                    <span className={`px-6 py-4 border rounded-lg shadow`} style={{ backgroundColor: result?.bgColor, color: result?.color }}>{result?.type}</span>
                    <p className='text-center text-base font-medium leading-tight tracking-wide border-b border-black pb-8'>
                        {result?.description}
                    </p>
                    <p className='text-center text-lg font-medium tracking-wider'>If you need to a diet, you should check out the list below.👇</p>
                    <div className='w-full flex flex-col md:flex-row justify-between items-center pb-8'>
                        <img className='w-[45%] object-cover mb-4 md:mr-4' src="/images/diet.jpg" alt="" />
                        <div className='flex flex-col justify-center items-start gap-4'>
                            <div className='w-full flex flex-col items-center px-2 py-4 border border-gray-400 rounded-md'>
                                <h2 className='text-2xl font-bold mb-2'>Breakfast</h2>
                                <p className='text-center text-base font-medium tracking-wide'>{dietList?.breakfast}</p>
                            </div>
                            <div className='w-full flex flex-col items-center px-2 py-4 border border-gray-400 rounded-md'>
                                <h2 className='text-2xl font-bold mb-2'>Lunch</h2>
                                <p className='text-center text-base font-medium tracking-wide'>{dietList?.lunch}</p>
                            </div>
                            <div className='w-full flex flex-col items-center px-2 py-4 border border-gray-400 rounded-md'>
                                <h2 className='text-2xl font-bold mb-2'>Dinner</h2>
                                <p className='text-center text-base font-medium tracking-wide'>{dietList?.dinner}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
