import { useState } from 'react'
import { Header } from '../components/Header'
import { Steps } from '../components/Steps'
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'

const Button = styled.button`
    width: 50%;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    border-width: 1px;
    --tw-border-opacity: 1;
    border-color: rgb(56 189 248 / var(--tw-border-opacity));
    border-radius: 0.75rem;
    outline: 2px solid transparent;
    outline-offset: 2px
    --tw-bg-opacity: 1;
    background-color: rgb(224 242 254 / var(--tw-bg-opacity));
`


export const Home = () => {
    const [state, setState] = useState(0)
    const [data, setData] = useState({
        name: "",
        weight: "",
        height: "",
        gender: "",
        error: false
    })
    const navigate = useNavigate()
    const nextStep = () => {
        if (state === 0) {
            if (data.name.trim() !== "" && data.gender.trim() !== "") {
                setData(prev => ({ ...prev, error: false }))
                setState(state + 1)
            } else {
                setData(prev => ({ ...prev, error: true }))
            }
        } else if (state === 1) {
            if (data.weight.trim() !== "" && data.height.trim() !== "") {
                setData(prev => ({ ...prev, error: false }))
                navigate("/result", { replace: true, state: data })
            } else {
                setData(prev => ({ ...prev, error: true }))
            }
        }
    }


    return (
        <>
            <Header />
            <div className='container m-auto'>
                <div className='w-full py-8 flex flex-col gap-4 justify-center items-center'>

                    <Steps step={state} data={data} setData={setData} />
                    {data.error && <span className='fixed top-16 right-4 text-xs p-4 text-white font-extrabold border bg-red-400 rounded-xl'>Please enter your information...</span>}
                    <Button onClick={nextStep} >{state === 0 ? "Next" : "Calculate"}</Button>
                </div>
            </div>
        </>
    )
}