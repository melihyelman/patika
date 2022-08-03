import { useState } from "react";
import { FaBars, FaHome, FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom"

export const Header = ({ fixed }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-sky-500 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            to="/"
                        >
                            BMI Calculator App
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FaBars />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex gap-2 items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to={"/"}
                                >
                                    <FaHome className='text-lg leading-lg text-white opacity-75' /><span>Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex gap-2 items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to={"/what-is-bmi"}
                                >
                                    <FaQuestion className='text-lg leading-lg text-white opacity-75' /><span>What Is BMI ?</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}