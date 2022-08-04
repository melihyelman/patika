import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const [cryptoName, setCryptoName] = useState('');
    const nagivate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        nagivate(`/details/${cryptoName}`);
    }
    return (
        <header className="bg-gray-200">
            <div className='container m-auto py-8 px-4 flex flex-col gap-4 justify-center items-center'>
                <h1 className="text-2xl text-[#2C3639] text-center font-bold  ">
                    Crypto Tracker App
                </h1>
                <form className='w-full flex' onSubmit={handleSubmit}>
                    <input className="flex-1 px-4 py-2 border  bg-white rounded-lg rounded-r-none text-black border-gray-400 outline-none placeholder:text-white" type="text" placeholder="Search for a book" value={cryptoName} onChange={e => setCryptoName(e.target.value)} />
                    <button type='submit' className='text-[#2C3639] py-2 px-4 -ml-px border border-gray-400 rounded-lg rounded-l-none outline-none transition-all hover:bg-[#2C3639] hover:text-[#DCD7C9]'>Search</button>
                </form>
            </div>
        </header>
    )
}
