import React from 'react'
import { Header } from '../components/Header'
import { Match } from '../components/Match'

export const Game = () => {
    return (
        <div className='container mx-auto py-8 px-4'>
            <Header />
            <Match />
        </div>
    )
}
