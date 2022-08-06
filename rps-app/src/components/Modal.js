import React from 'react'
import { History } from './History'

export const Modal = ({ open, setOpen }) => {
    return open && (
        <>
            <div
                className={`p-4 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
            >
                <div className="relative w-full my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div onClick={() => setOpen(false)} className='p-4 absolute top-3 right-3 hover:bg-[rgba(0,0,0,.1)] hover:rounded-full cursor-pointer transition-all'>
                            <img className='w-6 h-6' src="/images/icon-close.svg" alt="close" />
                        </div>
                        <div className="flex justify-center items-center p-14">
                            {open === "rules" ? <img src='/images/image-rules.svg' alt='rule' /> : (
                                <History />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
