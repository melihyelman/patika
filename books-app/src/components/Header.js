import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBooksAsync } from '../redux/booksSlice';

export const Header = () => {
    const [booksName, setBooksName] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(getBooksAsync(booksName))
    }

    return (
        <header className="bg-[#DCD7C9]">
            <div className='container m-auto py-8  flex flex-col gap-4 justify-center items-center'>
                <h1 className="text-2xl text-[#2C3639] text-center font-bold  ">
                    Book Searching App
                </h1>
                <form className='w-full flex' onSubmit={handleSubmit}>
                    <input className="flex-1 px-4 py-2 border  bg-[#A27B5C] rounded-md rounded-r-none text-white border-[#DCD7C9] outline-none placeholder:text-white" type="text" placeholder="Search for a book" value={booksName} onChange={e => setBooksName(e.target.value)} />
                    <button type='submit' className='text-[#2C3639] py-2 px-4 -ml-px border border-[#A27B5C] rounded-md rounded-l-none outline-none transition-all hover:bg-[#2C3639] hover:text-[#DCD7C9]'>Search</button>
                </form>
            </div>
        </header>
    )
}