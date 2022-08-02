import { useState } from 'react';
import Modal from './Modal'

export const BookCard = ({ item }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className='max-w-[calc(25%-12px)]  w-[calc(25%-12px)] overflow-auto flex flex-col justify-center items-center gap-3 border p-6 shadow'>
                <img className='w-40 h-40 object-cover' src={item.volumeInfo.imageLinks?.thumbnail} alt="not found" />
                <span className='text-xs p-2 border bg-[#DCD7C9] cursor-pointer' onClick={() => setShowModal(true)}>More About</span>
                <div className='flex items-start justify-between flex-col gap-2 text-sm'>
                    <div className='flex gap-1'>
                        <p>Author: </p>
                        <span >{item.volumeInfo.authors?.map(e => e)}</span>
                    </div>
                    <div className='flex gap-1'>
                        <p>Categories: </p>
                        <span >{item.volumeInfo.categories?.map(e => e)}</span>
                    </div>
                    <div className='flex gap-1'>
                        <p>Page: </p>
                        <span >{item.volumeInfo.pageCount}</span>

                    </div>
                    <div className='flex gap-1'>
                        <p>Publish Date: </p>
                        <span >{item.volumeInfo.publishedDate}</span>
                    </div>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} item={item} />
        </>
    )
}
