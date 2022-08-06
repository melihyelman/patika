import { useState } from 'react'
import { Game } from '../components/Game'
import { Header } from '../components/Header'
import { Modal } from '../components/Modal'

export const Home = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='container mx-auto py-8 px-4'>
            <Header />
            <Game />
            <button onClick={() => setOpen("history")} className='hover:bg-[rgba(0,0,0,.7)] transition-all absolute bottom-2 right-2 bg-[rgba(0,0,0,.3)] text-white border-4 border-[rgba(0,0,0,.7)] px-6 py-2 rounded-lg'>Show History</button>
            <button onClick={() => setOpen("rules")} className='hover:bg-[rgba(0,0,0,.7)] transition-all absolute bottom-16 right-2 bg-[rgba(0,0,0,.3)] text-white border-4 border-[rgba(0,0,0,.7)] px-6 py-2 rounded-lg'>Rules</button>
            <Modal open={open} setOpen={setOpen} />
        </div>
    )
}
