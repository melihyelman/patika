import { useState } from 'react'
import { FaUser, FaStar, FaShoppingBasket, FaSignOutAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { useLocalStorage } from '../hooks/useLocalStorage';

export const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [user, setUser] = useLocalStorage("user", {});
    return (
        <>
            <nav className="px-2 py-3 bg-blue-500 mb-3">
                <div className="container px-4 mx-auto flex items-center justify-between">
                    <div className="flex">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            to={'/'}
                        >
                            Clothes App
                        </Link>

                    </div>
                    <ul className="relative lex items-center justify-center list-none">
                        <li className="nav-item">
                            <div
                                className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 border rounded-lg  transition-all cursor-pointer ${navbarOpen ? "bg-blue-200" : "bg-transparent"}`}
                                onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                <img className='w-8 h-8 rounded-full' src={user.avatar ? user.avatar : "https://www.ktoeos.org/wp-content/uploads/2021/11/default-avatar.png"} alt="userimage" />
                            </div>
                        </li>
                        <div className={`${navbarOpen ? "flex flex-col gap-2 z-50" : "hidden"} absolute top-16 right-0 rounded-lg bg-blue-500 p-4 min-w-[12rem]`}>
                            <Link to="profile" className='px-4 py-2 bg-blue-300 rounded-lg text-gray-700 hover:bg-blue-200 cursor-pointer'>
                                <li className='flex items-center gap-3'>
                                    <FaUser />Profile
                                </li>
                            </Link>
                            <Link to="favorites" className='px-4 py-2 bg-blue-300 rounded-lg text-gray-700 hover:bg-blue-200 cursor-pointer'>
                                <li className='flex items-center gap-3'>
                                    <FaStar />Favorites
                                </li>
                            </Link>
                            <Link to="Basket" className='px-4 py-2 bg-blue-300 rounded-lg text-gray-700 hover:bg-blue-200 cursor-pointer'>
                                <li className='flex items-center gap-3'>
                                    <FaShoppingBasket />Basket
                                </li>
                            </Link>
                            <li className='flex items-center gap-3 px-4 py-2 bg-red-500 rounded-lg text-white hover:bg-red-400 cursor-pointer' onClick={() => { setUser({}); window.location.reload() }}>
                                <FaSignOutAlt />Logout
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    );
}
